import React, { useEffect, useState } from 'react'
import { useForm } from "@mantine/form"
import { validateString } from '../utils/common'
import { Button, Group, Select, TextInput } from '@mantine/core'
import useNigerianStates from '../hooks/useNigerianStates'
import Map from './Map'

const AddLocation = ({ propertyDetails, setPropertyDetails, nextStep }) => {
  const { getAllStates, getCitiesForState } = useNigerianStates()
  const [availableCities, setAvailableCities] = useState([])
  
  const form = useForm({
    initialValues: {
      country: 'Nigeria', // Fixed to Nigeria
      state: propertyDetails?.state || '',
      city: propertyDetails?.city || '',
      address: propertyDetails?.address || ''
    },
    validate: {
      state: (value) => validateString(value),
      city: (value) => validateString(value),
      address: (value) => validateString(value),
    }
  })

  const { state, city, address } = form.values

  // Update available cities when state changes
  useEffect(() => {
    if (state) {
      const cities = getCitiesForState(state)
      setAvailableCities(cities)
      // Reset city if current city is not in the new state
      if (city && !cities.find(c => c.value === city)) {
        form.setFieldValue('city', '')
      }
    } else {
      setAvailableCities([])
    }
  }, [state])

  const handleSubmit = () => {
    const { hasErrors } = form.validate()
    if (!hasErrors) {
      setPropertyDetails((prev) => ({ 
        ...prev, 
        country: 'Nigeria', 
        state, 
        city, 
        address 
      }))
      nextStep()
    }
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        handleSubmit()
      }}
    >
      <div className='flexCenter'>
        {/* LEFT SIDE */}
        <div className='flexCenter flex-1'>
          {/* INPUTS */}
          <div>
            <TextInput
              w={"100%"}
              label="Country"
              value="Nigeria"
              disabled
              description="Properties are limited to Nigeria only"
            />
            <Select
              w={"100%"}
              withAsterisk
              label="State"
              placeholder="Select a Nigerian state"
              clearable
              searchable
              data={getAllStates()}
              {...form.getInputProps("state", { type: "input" })}
            />
            <Select
              w={"100%"}
              withAsterisk
              label="City"
              placeholder="Select a city"
              clearable
              searchable
              data={availableCities}
              disabled={!state}
              {...form.getInputProps("city", { type: "input" })}
            />
            <TextInput
              w={"100%"}
              withAsterisk
              label="Address"
              placeholder="Enter property address"
              {...form.getInputProps("address", { type: "input" })}
            />
          </div>
        </div>
        {/* RIGHT SIDE */}
        <div className='flex-1'>
          <Map address={address} city={city} country="Nigeria" />
        </div>
      </div>
      <Group justify='center' mt={'xl'}>
        <Button type='submit'>Next Step</Button>
      </Group>
    </form>
  )
}

export default AddLocation