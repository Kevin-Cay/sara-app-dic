import React, {useState, useEffect} from 'react'
import {RiArrowDropDownLine} from 'react-icons/ri'
import {services} from '../json/events'

function CitaCard() {
    const [genero, setGenero] = useState('dama');
    let today = new Date();
    today = today.toISOString().substr(0, 10);
    const [date, setDate] = useState(today);
    const [servicios, setServicios] = useState(services);
    const [horarios, setHorarios] = useState([]);
    
    // useEffect(() => {
    //     console.log(genero)

    // }, [genero])

  return (
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
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Morales" />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 md:mb-8 mb-4">
                    <div className="w-full md:w-1/2 px-3">
                    <label className="block  tracking-wide text-gray-700 text-xs font-bold mb-2" >
                        Fecha
                    </label>
                    <input onChange={(e) => setDate(e.target.value)} value={date} min={today} required className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="date" placeholder="Fecha"  />
                    <p className="text-gray-600 text-xs italic">Recuerde que los domingos no está abierto.</p>
                    </div>
                    <ServiciosTotales values={servicios} genero={genero} />
                </div>
                <div className="flex flex-wrap -mx-3 mb-2">
                   
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block  tracking-wide text-gray-700 text-xs font-bold mb-2" >
                        Hora
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
                        <RiArrowDropDownLine className=' fill-current h-6 w-8'  />
                        </div>
                    </div>
                    </div>
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block  tracking-wide text-gray-700 text-xs font-bold mb-2">
                        Teléfono <span className='text-gray-600 text-xs font-normal italic' >(opcional)</span>
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="tel" type="tel" placeholder="3105-112*" />
                    </div>
                </div>
                <div className="md:flex md:items-center md:mr-6 ">
                    <div className="md:w-1/2">
                    <input className="shadow bg-lime-500 hover:bg-lime-400 focus:shadow-outline focus:outline-none text-white cursor-pointer font-bold py-3 w-full my-2 rounded" type="submit" value="Crear cita" />
                    </div>
                </div>
            </form>
        </section>
  )
}


/**
 * 
 * @param {object, string} param0 Objeto con los servicios y el genero 
 * @returns 
 */
const ServiciosTotales = ({values, genero}) =>{
    let serviciosList = values[genero]
    let servicios = []
    Object.values(serviciosList).map(x=> servicios.push(...x))
    servicios = servicios.sort()
    console.log(servicios)
    return(
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label className="block  tracking-wide text-gray-700 text-xs font-bold mb-2" >
            Servicio
        </label>
        <div className="relative">
            <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                {
                    servicios.map((x, i) => <option key={i}>{x}</option>)
                }
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <RiArrowDropDownLine className=' fill-current h-6 w-8'  />
            </div>
        </div>
        </div>
    )
}


export default CitaCard