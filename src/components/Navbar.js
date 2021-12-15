import React, {useState} from 'react'

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
            <nav className="flex items-center justify-between flex-wrap bg-red lg:px-32 p-6 dark:bg-red relative ">
                <div className="flex items-center flex-shrink-0 text-white mr-6">
                    <span className="font-semibold text-xl tracking-tight">Sara Salón</span>
                </div>
                <div className="block lg:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="flex items-center px-3 py-2 border rounded text-white hover:text-white hover:border-white">
                        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                    </button>
                </div>
                <div className="w-full hidden flex-grow lg:flex lg:items-center lg:w-auto  ">
                        <div className="text-sm lg:flex-grow  ">
                            <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0  text-white hover:text-gray-400 mr-4">
                            Hacer cita 
                            </a>
                            <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0  text-white  hover:text-gray-400 mr-4">
                            Ver calendario
                            </a>
                        </div>
                    </div>
                {
                    isOpen? ( 
                    <div className="w-full block flex-grow lg:hidden">
                        <div className="text-sm lg:flex-grow  ">
                            <a href="#cita" onClick={() =>setIsOpen(false)} className="block mt-4 lg:inline-block lg:mt-0  text-white hover:text-gray-400 mr-4">
                            Hacer cita 
                            </a>
                            <a href="#calendar" onClick={() =>setIsOpen(false)} className="block mt-4 lg:inline-block lg:mt-0  text-white  hover:text-gray-400 mr-4">
                            Ver calendario
                            </a>
                        </div>
                    </div>) : null 
                }
            </nav>
    )
}

export default Navbar
