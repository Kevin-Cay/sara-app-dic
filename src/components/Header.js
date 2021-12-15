import React from 'react'

function Header() {
    return (
        <section id="header" className="container mx-auto dark:bg-white text-black mt-3 rounded-xl md:p-12 p-8 shadow-md max-w-5xl ">
            <div className="md:flex justify-center">
                <div className="md:shrink  md:w-96 w-64  ">
                    <img src="./profile.svg"  alt="salon_photo" />
                </div>
                <div className=" ">
                    <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">This is the title</div>
                    <h1 href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">This is the new title</h1>
                    <p className="mt-2 text-gray-500">This is the description of the site</p>
                    <button class="bg-red hover:bg-red text-white font-bold py-2 px-4 border border-blue-700 rounded">
                    Hacer una cita
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Header
