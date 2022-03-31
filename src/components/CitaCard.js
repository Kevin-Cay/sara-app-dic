import React from 'react'

function CitaCard({fecha ="2022-03-14", hora="9am-10am", servicio="corte de cabello"}) {
  return (
    <div>
         <section className="container mx-auto bg-white text-black my-3 rounded-xl  py-4 px-8 shadow-md w-full  ">
            <div className="md:flex justify-start">
                <div className=" ">
                    <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold hover:underline">{fecha}</div>
                    <h1 className="block mt-1 text-2xl leading-tight font-medium text-black ">{servicio}</h1>
                    <p className="mt-2 text-gray-500">{hora}</p>
                </div>
            </div>
        </section>
    </div>
  )
}

export default CitaCard