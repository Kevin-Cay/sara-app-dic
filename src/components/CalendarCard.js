import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import esLocale from '@fullcalendar/core/locales/es';
import {eventList} from '../json/events'

function CalendarCard() {
    return (
        <section id="calendar" className='container mx-auto  bg-white text-black mt-3 rounded-xl md:p-12 p-4 shadow-md  max-w-3xl  box-border' >
             <p className='text-3xl text-center font-bold' >Calendario </p>
             <div className="" >
            <FullCalendar
            locale={esLocale}
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            headerToolbar={{
              left: 'prev,next today',
              center: 'title',
              right: 'dayGridMonth,timeGridWeek,timeGridDay'
            }}
            eventTimeFormat={{hour: 'numeric',
            minute: '2-digit',
            meridiem: 'short'}}
            titleFormat={{ year: 'numeric', month: 'short', day: 'numeric' }}
            initialView='timeGridWeek'
            slotMinTime="09:00:00"
            slotMaxTime="19:30:00"
            selectMirror={true}
            dayMaxEvents={true}
            eventBackgroundColor='#942313'
            eventBorderColor='#1a1b1b'
            hiddenDays={[0]}
            events={eventList}
            />
        </div>
        </section>
    )
}

export default CalendarCard
