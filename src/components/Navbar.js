import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {HiMenuAlt3} from 'react-icons/hi'
import {AiOutlineClose} from 'react-icons/ai'

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
            <nav className="flex items-center justify-between flex-wrap bg-red lg:px-32 p-6 dark:bg-red relative ">
                <div className="flex items-center flex-shrink-0 text-white mr-6">
                    <span className="font-semibold text-xl tracking-tight">Sara Salón</span>
                </div>
                <div className="block lg:hidden">
                <div onClick={() => setIsOpen(!isOpen)} className="flex items-center px-2 py-1 border rounded text-white hover:text-white hover:border-white">
                        {
                            isOpen ?  <AiOutlineClose className="text-2xl" /> : <HiMenuAlt3 className="text-2xl" />
                        }
                        {/* <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg> */}
                </div>
                   
                </div>
                <div className="w-full hidden flex-grow lg:flex lg:items-center lg:w-auto  ">
                        <div className="text-sm lg:flex-grow  ">
                            <Link to="/" className="block mt-4 lg:inline-block lg:mt-0  text-white hover:text-gray-400 mr-4" >Inicio</Link>
                            
                            <Link to="/cita" className="block mt-4 lg:inline-block lg:mt-0  text-white hover:text-gray-400 mr-4"> Cita </Link>
                            
                            <Link to="/calendario" className="block mt-4 lg:inline-block lg:mt-0  text-white hover:text-gray-400 mr-4"> Calendario </Link>
                            
                        </div>
                    </div>
                {
                    isOpen? ( 
                    <div className="w-full block flex-grow lg:hidden">
                        <div className="text-md lg:flex-grow  ">
                            <Link to="/"  onClick={() =>setIsOpen(false)} className="block mt-4 lg:inline-block lg:mt-0  text-white hover:text-gray-400 mr-4" >Inicio</Link>
                            <Link to="/cita" onClick={() =>setIsOpen(false)} className="block mt-4 lg:inline-block lg:mt-0  text-white hover:text-gray-400 mr-4"> Cita </Link>
                            <Link to="/calendario" onClick={() =>setIsOpen(false)} className="block mt-4 lg:inline-block lg:mt-0  text-white hover:text-gray-400 mr-4"> Calendario </Link>
                        </div>
                    </div>) : null 
                }
            </nav>
    )
}

export default Navbar
