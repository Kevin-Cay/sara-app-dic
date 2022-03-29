import React, {useState, useEffect} from 'react'
import CalendarCard from '../components/CalendarCard'

function CitaView() {
    const [genero, setGenero] = useState('dama');
    
    useEffect(() => {
        console.log(genero)

    }, [genero])

    return (
        <div className='mx-2' >
        <section id="cita" className="container md:mx-auto  bg-white text-black mt-5 rounded-xl sm:p-10 p-4 shadow-md max-w-3xl " >
        <p className='text-3xl text-center font-bold' >Crear una cita </p>
            <form className="w-full ">
                <div className="flex justify-center items-center mb-4 mx-auto mt-2 "  >
                        <label className="inline-flex items-center">
                        <input type="radio" className="form-radio" name="accountType" value="dama" onChange={(e) => setGenero('dama')} checked={genero ==="dama" ? true : false } />
                        <span className="ml-2">Dama</span>
                        </label>
                        <label className="inline-flex items-center ml-6">
                        <input type="radio" className="form-radio" name="accountType" value="caballero" onChange={() => setGenero('caballero')}  />
                        <span className="ml-2">Caballero</span>
                        </label>
                        <label className="inline-flex items-center ml-6">
                        <input type="radio" className="form-radio" name="accountType" value="nino" onChange={() => setGenero('nino')}  />
                        <span className="ml-2">Niño</span>
                        </label>
                    </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block  tracking-wide text-gray-700 text-xs font-bold mb-2" >
                        Nombre
                    </label>
                    <input required className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Julio" />
                   
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                    <label required className="block  tracking-wide text-gray-700 text-xs font-bold mb-2">
                        Apellido
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                    <label className="block  tracking-wide text-gray-700 text-xs font-bold mb-2" >
                        Fecha
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="******************" />
                    <p className="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-2">
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label className="block  tracking-wide text-gray-700 text-xs font-bold mb-2" >
                        Hora
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Albuquerque"  />
                    </div>
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label className="block  tracking-wide text-gray-700 text-xs font-bold mb-2" >
                        Servicio
                    </label>
                    <div className="relative">
                        <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                        <option>Corte</option>
                        <option>Planchado</option>
                        <option>Tinte</option>
                        <option>Pestañas</option>
                        <option>Uñas</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                        </div>
                    </div>
                    </div>
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label className="block  tracking-wide text-gray-700 text-xs font-bold mb-2">
                        Observación
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="90210" />
                    </div>
                </div>
                <div className="md:flex md:items-center">
                    <div className="md:w-3/3">
                    <input className="shadow bg-lime-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit" value="Crear cita" />
                    </div>
                </div>
            </form>
        </section>
        <CalendarCard />
        </div>
    )
}

export default CitaView
