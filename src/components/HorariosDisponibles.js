import React from 'react'
import {RiArrowDropDownLine} from 'react-icons/ri'
import moment from 'moment'

function HorariosDisponibles({date, distancia, setHorario, setInicial, setFinal}) {

    
    const firstList =[ ["9:00", true], ["9:30", false], ["10:00", false], ["10:30", true], ["11:00", true], ["11:30", false], ["12:00", false], ["12:30", false], ["13:00", true]]
    const secondList = [["14:00", true], ["14:30", true], ["15:00", true], ["15:30", true], ["16:00", false], ["16:30", false], ["17:00", false], ["17:30", true], ["18:00", true], ["18:30", true], ["19:00", true], ["19:30", true]]
    let horarios = []
    if(distancia > 0){
        firstList.forEach((hora , i) =>{
            if(i+distancia < (firstList.length )){
                let listadoTrue = firstList.slice(i, i+distancia).map(x=> x[1])
                if(!listadoTrue.includes(false)){
                    horarios.push(`${hora[0]}-${firstList[i+distancia][0]}`)
                }
            }
        } )
        secondList.forEach((hora , i) =>{
            if(i+distancia < (secondList.length )){
                let listadoTrue = secondList.slice(i, i+distancia).map(x=> x[1])
                if(!listadoTrue.includes(false)){
                    horarios.push(`${hora[0]}-${secondList[i+distancia][0]}`)
                }
            }
        } )
    }
    const addHorario = (e)=>{
        let horas = e.target.value
        horas = horas.split('-')
        setHorario(horas)
        if(horas.length > 0 && date !== ''){
            let hora1 = horas[0].split('-')
            hora1 = hora1[0].split(':')
            let hora2 = horas[1].split('-')
            hora2 = hora2[0].split(':')
             let newStart = moment(date).add(hora1[0], 'hours').add(hora1[1], 'minutes').format()
           
            // let hora2 = hora[1].split(':')
            let newEnd = moment(date).add(hora2[0], 'hours').add(hora2[1], 'minutes').format()
           setInicial(newStart)
           setFinal(newEnd)
        }
    }
    return (

        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block  tracking-wide text-gray-700 text-xs font-bold mb-2" >
                        Hora
                    </label>
                    <div className="relative">
                        <select onChange={addHorario} className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                        {
                            horarios.length > 0 ?
                            horarios.map((x, i) => <option   key={i}>{x}</option>)
                            : <option disabled >No hay horarios disponibles</option>
                        }
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <RiArrowDropDownLine className=' fill-current h-6 w-8'  />
                        </div>
                    </div>
                    </div>
    )
}

export default HorariosDisponibles