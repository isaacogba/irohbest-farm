import React, { useContext, useState } from 'react'
import { Button, Modal, TextInput, Textarea, Select } from "@mantine/core"
import { DatePicker } from "@mantine/dates"
import { useMutation } from 'react-query'
import UserDetailContext from '../context/UserDetailContext'
import { bookVisit } from '../utils/api'
import { toast } from 'react-toastify'
import dayjs from 'dayjs'

const BookingModal = ({ opened, setOpened, email, propertyId }) => {
    const [value, setValue] = useState(null)
    const [timeSlot, setTimeSlot] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [visitType, setVisitType] = useState('')
    const [specialRequests, setSpecialRequests] = useState('')
    const { userDetails: { token }, setUserDetails } = useContext(UserDetailContext)

    const timeSlots = [
        { value: '9:00-10:00', label: '9:00 AM - 10:00 AM' },
        { value: '10:00-11:00', label: '10:00 AM - 11:00 AM' },
        { value: '11:00-12:00', label: '11:00 AM - 12:00 PM' },
        { value: '14:00-15:00', label: '2:00 PM - 3:00 PM' },
        { value: '15:00-16:00', label: '3:00 PM - 4:00 PM' },
        { value: '16:00-17:00', label: '4:00 PM - 5:00 PM' }
    ]

    const visitTypes = [
        { value: 'purchase', label: 'Property Purchase' },
        { value: 'rent', label: 'Rental/Lease' },
        { value: 'airbnb', label: 'Airbnb Setup' },
        { value: 'investment', label: 'Investment Consultation' }
    ]

    const handleBookingSuccess = () => {
        toast.success("Your property visit has been scheduled! Speedlix will contact you shortly to confirm.", {
            position: "bottom-right"
        })
        setUserDetails((prev) => ({
            ...prev,
            bookings: [
                ...prev.bookings,
                {
                    id: propertyId,
                    date: dayjs(value).format("DD/MM/YYYY"),
                    time: timeSlot,
                    type: visitType
                }
            ]
        }))
    }

    const { mutate, isLoading } = useMutation({
        mutationFn: () => bookVisit({
            date: value,
            timeSlot,
            phoneNumber,
            visitType,
            specialRequests
        }, propertyId, email, token),
        onSuccess: () => handleBookingSuccess(),
        onError: (error) => {
            console.error("Booking error:", error);
            toast.error(error?.response?.data?.message || "Something went wrong, Try again please");
        },
        onSettled: () => setOpened(false)
    })

    return (
        <Modal
            opened={opened}
            title="Schedule Property Visit"
            centered
            size="md"
            onClose={() => setOpened(false)}
        >
            <div className='flex flex-col gap-4'>
                <div className='bg-blue-50 p-3 rounded-lg mb-4'>
                    <p className='text-sm text-blue-700'>
                        <strong>Contact Info:</strong> Speedlix will reach out via {email} or call 08027928841 to confirm your appointment.
                    </p>
                </div>
                
                <DatePicker 
                    label="Preferred Visit Date"
                    value={value} 
                    onChange={setValue} 
                    minDate={new Date()} 
                    required
                />
                
                <Select
                    label="Preferred Time Slot"
                    placeholder="Select time"
                    data={timeSlots}
                    value={timeSlot}
                    onChange={setTimeSlot}
                    required
                />

                <Select
                    label="Visit Purpose"
                    placeholder="What are you interested in?"
                    data={visitTypes}
                    value={visitType}
                    onChange={setVisitType}
                    required
                />

                <TextInput
                    label="Phone Number"
                    placeholder="08027928841"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    required
                />

                <Textarea
                    label="Special Requests or Questions (Optional)"
                    placeholder="Any specific areas you'd like to focus on or questions about the property?"
                    value={specialRequests}
                    onChange={(e) => setSpecialRequests(e.target.value)}
                    minRows={2}
                />

                <Button 
                    disabled={!value || !timeSlot || !visitType || !phoneNumber || isLoading} 
                    onClick={() => mutate()}
                    size="md"
                    className="mt-4"
                >
                    {isLoading ? "Scheduling..." : "Schedule Visit"}
                </Button>
            </div>
        </Modal>
    )
}

export default BookingModal