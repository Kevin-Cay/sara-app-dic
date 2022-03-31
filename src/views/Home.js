import React from 'react'
import { Link } from 'react-router-dom'
import CitaCard from '../components/CitaCard'

function Home() {
    return (
        <div className='mx-2'>
        <section id="header" className="container mx-auto bg-white text-black mt-3 rounded-xl md:p-12 p-8 shadow-md max-w-5xl ">
            <div className="md:flex justify-center">
                <div className="md:shrink  md:w-96 w-64  ">
                    <img src="./profile.svg"  alt="salon_photo" />
                </div>
                <div className=" ">
                    <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold hover:underline">Sara Salón</div>
                    <h1 href="#" className="block mt-1 text-lg leading-tight font-medium text-black ">Aquí puedes agendar tu próxima cita 😊</h1>
                    <p className="my-4 text-gray-500">Con muy pocos datos puedes crear y agregar tu cita, es fácil y rápido. Cualquier duda puedes comunicarte con nosotros.</p>
                    <Link to='/cita' className=" mt-2 bg-red hover:bg-red text-white font-bold py-2 px-4 border border-blue-700 rounded" >
                        Agendar una cita
                    </Link>
                </div>
            </div>
        </section >
        <p className=' my-4 text-xl text-left font-bold max-w-5xl mx-auto' >Citas recientes</p>  
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 md:gap-4 gap-2  max-w-5xl mx-auto' >
        <CitaCard />
        <CitaCard />
        <CitaCard />
        <CitaCard />
        <CitaCard />
        <CitaCard />
        </div>
        </div>
    )
}

export default Home
