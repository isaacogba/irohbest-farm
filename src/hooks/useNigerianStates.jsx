import React from 'react'

const nigerianStates = [
    { value: 'Lagos', label: 'Lagos State 🏙️', cities: ['Lagos', 'Ikeja', 'Surulere', 'Victoria Island', 'Ikoyi', 'Lekki', 'Ajah', 'Alaba'] },
    { value: 'Abuja', label: 'Federal Capital Territory (Abuja) 🏛️', cities: ['Abuja', 'Maitama', 'Asokoro', 'Garki', 'Wuse', 'Jabi', 'Gwarinpa', 'Kubwa'] },
    { value: 'Rivers', label: 'Rivers State 🌊', cities: ['Port Harcourt', 'Obio-Akpor', 'Eleme', 'Ikwerre', 'Oyigbo'] },
    { value: 'Kano', label: 'Kano State 🕌', cities: ['Kano', 'Fagge', 'Dala', 'Gwale', 'Tarauni'] },
    { value: 'Oyo', label: 'Oyo State 👑', cities: ['Ibadan', 'Ogbomoso', 'Oyo', 'Iseyin', 'Saki'] },
    { value: 'Ogun', label: 'Ogun State 🌳', cities: ['Abeokuta', 'Sagamu', 'Ijebu Ode', 'Ota', 'Ilaro'] },
    { value: 'Kaduna', label: 'Kaduna State ⛰️', cities: ['Kaduna', 'Zaria', 'Kafanchan', 'Sabon Gari'] },
    { value: 'Katsina', label: 'Katsina State 🌾', cities: ['Katsina', 'Daura', 'Funtua', 'Malumfashi'] },
    { value: 'Plateau', label: 'Plateau State 🏔️', cities: ['Jos', 'Bukuru', 'Shendam', 'Pankshin'] },
    { value: 'Delta', label: 'Delta State 🛢️', cities: ['Asaba', 'Warri', 'Sapele', 'Ughelli', 'Agbor'] },
    { value: 'Edo', label: 'Edo State 🎭', cities: ['Benin City', 'Auchi', 'Ekpoma', 'Uromi'] },
    { value: 'Anambra', label: 'Anambra State 🏪', cities: ['Awka', 'Onitsha', 'Nnewi', 'Ekwulobia'] },
    { value: 'Enugu', label: 'Enugu State ⛏️', cities: ['Enugu', 'Nsukka', 'Oji River', 'Agbani'] },
    { value: 'Abia', label: 'Abia State 🏭', cities: ['Umuahia', 'Aba', 'Arochukwu', 'Ohafia'] },
    { value: 'Imo', label: 'Imo State 🌴', cities: ['Owerri', 'Orlu', 'Okigwe', 'Mbaise'] },
    { value: 'Cross River', label: 'Cross River State 🌊', cities: ['Calabar', 'Ugep', 'Obudu', 'Ikom'] },
    { value: 'Akwa Ibom', label: 'Akwa Ibom State 🛢️', cities: ['Uyo', 'Ikot Ekpene', 'Eket', 'Abak'] },
    { value: 'Bayelsa', label: 'Bayelsa State 🌊', cities: ['Yenagoa', 'Brass', 'Sagbama', 'Nembe'] },
    { value: 'Borno', label: 'Borno State 🏜️', cities: ['Maiduguri', 'Biu', 'Monguno', 'Dikwa'] },
    { value: 'Yobe', label: 'Yobe State 🌵', cities: ['Damaturu', 'Gashua', 'Nguru', 'Potiskum'] },
    { value: 'Taraba', label: 'Taraba State 🌿', cities: ['Jalingo', 'Wukari', 'Bali', 'Gembu'] },
    { value: 'Adamawa', label: 'Adamawa State ⛰️', cities: ['Yola', 'Mubi', 'Numan', 'Ganye'] },
    { value: 'Gombe', label: 'Gombe State 🏔️', cities: ['Gombe', 'Billiri', 'Kaltungo', 'Bajoga'] },
    { value: 'Bauchi', label: 'Bauchi State 🏞️', cities: ['Bauchi', 'Azare', 'Misau', 'Jama\'are'] },
    { value: 'Jigawa', label: 'Jigawa State 🌾', cities: ['Dutse', 'Hadejia', 'Gumel', 'Kazaure'] },
    { value: 'Zamfara', label: 'Zamfara State ⛏️', cities: ['Gusau', 'Kaura Namoda', 'Talata Mafara', 'Anka'] },
    { value: 'Sokoto', label: 'Sokoto State 🕌', cities: ['Sokoto', 'Tambuwal', 'Gwadabawa', 'Bodinga'] },
    { value: 'Kebbi', label: 'Kebbi State 🌾', cities: ['Birnin Kebbi', 'Argungu', 'Yauri', 'Zuru'] },
    { value: 'Niger', label: 'Niger State 🌊', cities: ['Minna', 'Bida', 'Kontagora', 'Suleja'] },
    { value: 'Kwara', label: 'Kwara State 🌉', cities: ['Ilorin', 'Offa', 'Omu-Aran', 'Lafiagi'] },
    { value: 'Kogi', label: 'Kogi State 🌊', cities: ['Lokoja', 'Okene', 'Kabba', 'Ankpa'] },
    { value: 'Benue', label: 'Benue State 🌾', cities: ['Makurdi', 'Gboko', 'Katsina-Ala', 'Otukpo'] },
    { value: 'Nasarawa', label: 'Nasarawa State 🏔️', cities: ['Lafia', 'Keffi', 'Akwanga', 'Nasarawa'] },
    { value: 'Osun', label: 'Osun State 👑', cities: ['Osogbo', 'Ile-Ife', 'Ilesa', 'Ede'] },
    { value: 'Ekiti', label: 'Ekiti State 🏔️', cities: ['Ado-Ekiti', 'Ikere', 'Aramoko', 'Ijero'] },
    { value: 'Ondo', label: 'Ondo State 🌴', cities: ['Akure', 'Ondo', 'Owo', 'Ikare'] }
]

const useNigerianStates = () => {
    const getAllStates = () => nigerianStates.map(state => ({
        value: state.value,
        label: state.label
    }));

    const getCitiesForState = (stateName) => {
        const state = nigerianStates.find(s => s.value === stateName);
        return state ? state.cities.map(city => ({
            value: city,
            label: city
        })) : [];
    };

    return { getAllStates, getCitiesForState, nigerianStates }
}

export default useNigerianStates