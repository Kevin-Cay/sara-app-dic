import React from 'react'
import CalendarCard from '../components/CalendarCard'
import CrearCitaCard from '../components/CrearCitaCard'

function CitaView() {
    
    return (
        <div className='mx-2' >
        <CrearCitaCard />
        <CalendarCard />
        </div>
    )
}

export default CitaView
