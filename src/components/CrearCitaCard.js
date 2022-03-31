import React, {useState, useRef, useEffect} from 'react'
import ServiciosTotales from './ServiciosTotales'
import HorariosDisponibles from './HorariosDisponibles'
import {getServicios} from '../firebase/firebase_functions'


function CrearCitaCard() {
    const cita = {}
    const nombre = useRef(null)
    const apellido = useRef(null)
    const telefono = useRef(null)
    const [genero, setGenero] = useState('dama');
    let today = new Date();
    today = today.toISOString().substr(0, 10);
    const [date, setDate] = useState(today);
    const [servicios, setServicios] = useState(null);
    const [servicio, setServicio] = useState('');
    const [horario, setHorario] = useState([]);
    const [inicial, setInicial] = useState('');
    const [final, setFinal] = useState('');
    const [distancia, setDistancia] = useState(0);


    useEffect( ()  => {
        getServicios().then(servicios=> setServicios(servicios))
    }, []);

    const handleSubmit = (e) =>{
        e.preventDefault()
        cita.nombre = `${nombre.current.value} ${apellido.current.value}`
        cita.telefono = telefono.current.value
        cita.date = date
        cita.title = servicio
        cita.horario = horario.join('-')
        cita.start = inicial
        cita.end = final
        
        console.log(cita)
        nombre.current.value = ""
        apellido.current.value = ""
        telefono.current.value = ""
        setDate(today)
        setServicio('')
        setHorario([])
        setInicial('')
        setFinal('')
        setDistancia(0)

    }
    
  return (
    <section id="cita" className="container md:mx-auto  bg-white text-black mt-5 rounded-xl sm:p-10 p-4 shadow-md max-w-3xl " >
        <p className='text-3xl text-center font-bold' >Crear una cita </p>
            <form className="w-full " onSubmit={handleSubmit} >
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
                    <input  ref={nombre} required className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Julio" />
                   
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                    <label className="block  tracking-wide text-gray-700 text-xs font-bold mb-2">
                        Apellido
                    </label>
                    <input ref={apellido} required className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Morales" />
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
                    {
                        servicios && servicios.length > 0 ?
                        <ServiciosTotales values={servicios} genero={genero} servicio={servicio} setServicio={setServicio} setDistancia={setDistancia} />
                        : ""
                    }
                        
                </div>
                <div className="flex flex-wrap -mx-3 mb-2">
                   <HorariosDisponibles date={date} distancia={distancia} setHorario={setHorario} setInicial={setInicial} setFinal={setFinal} />
                    
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block  tracking-wide text-gray-700 text-xs font-bold mb-2">
                        Teléfono <span className='text-gray-600 text-xs font-normal italic' >(opcional)</span>
                    </label>
                    <input ref={telefono} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="tel" type="tel" placeholder="3105-112*" />
                    </div>
                </div>
                <div className="md:flex md:items-center md:mr-6 ">
                    <div className="md:w-1/2">
                    <input  className="shadow bg-lime-500 hover:bg-lime-400 focus:shadow-outline focus:outline-none text-white cursor-pointer font-bold py-3 w-full my-2 rounded" type="submit" value="Crear cita" />
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




export default CrearCitaCard