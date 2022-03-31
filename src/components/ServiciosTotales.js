import React, {useState, useEffect} from 'react'
import {RiArrowDropDownLine, RiContactsBookLine} from 'react-icons/ri'
    

function ServiciosTotales({values = {}, genero, servicio, setServicio, setDistancia}){
    let serviciosCollection = values.filter(x=> x.id === genero)
    let serviciosList = serviciosCollection.map(x=> x.data())
    let servicios = []
    console.log(serviciosList)
    
    // Object.values(serviciosList).map(x=> servicios.push(...x))
    // servicios = servicios.sort()
    const printSelect = (e)=>{
        // let servicioActual = e.target.value
        // let index = Object.keys(serviciosList)
        // index = index.filter(x=> serviciosList[x].indexOf(servicioActual) !== -1  )
        // index = (Number(index[0])/5)
        // setDistancia(index)
        // setServicio(servicioActual)
    } 
    return(
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        {/* <label className="block  tracking-wide text-gray-700 text-xs font-bold mb-2" >
            Servicio
        </label>
        <div className="relative">
            <select onChange={printSelect}  className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                {
                    servicios.map((x, i) => <option   key={i}>{x}</option>)
                }
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <RiArrowDropDownLine className=' fill-current h-6 w-8'  />
            </div>
        </div> */}
        </div>
    )
}
export default ServiciosTotales