import React from 'react'
import { Link } from 'react-router-dom'

function Shop() {

    const Men = [
        {
            type: "Fashion",
            img: "https://i.postimg.cc/wMk0gPtB/1.png",
            to: "/men",
        },
        {
            type: "Footwear",
            img: "https://i.postimg.cc/V6QRM1n6/4.png",
            to: "/shoe",
        },
        {
            type: "Accessories",
            img: "https://i.postimg.cc/SRV7wM52/6.png",
            to: "/accessories",
        },
        {
            type: "Watches",
            img: "https://i.postimg.cc/x18tV690/7.png",
            to: "/watch",
        }
    ]

    const Women = [
        {
            type: "Fashion",
            img: "https://i.postimg.cc/brPmX8wM/2.png",
            to: "/women",
        },
        {
            type: "Footwear",
            img: "https://i.postimg.cc/cLzTxfJf/3.png",
            to: "/shoe",
        },
        {
            type: "Accessories",
            img: "https://i.postimg.cc/zvqFtjdY/5.png",
            to: "/accessories",
        },
        {
            type: "Watches",
            img: "https://i.postimg.cc/wvXkQPQk/8.png",
            to: "/watch",
        },
    ]
    return (
        <div>

            <section className="text-gray-600 body-font">
                <div className="container px-5 py-10 mx-auto flex flex-wrap">
                    <div className="flex w-full mb-6 flex-wrap items-center justify-center text-center">
                        <h1 className="sm:text-3xl text-xl font-semibold font-aboreto text-gray-900 lg:w-1/2 lg:mb-0 mb-4">Product’s You Wish For</h1>
                    </div>
                    <div className="flex flex-wrap md:-m-2 -m-1">
                        <div className="flex flex-wrap  w-full md:w-1/2">
                            <Link to="/men" className="md:p-2 p-1 w-1/2">
                                <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://i.postimg.cc/cHSk2RtH/4.png" />
                            </Link>
                            <Link to="" className="md:p-2 p-1 w-1/2">
                                <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://i.postimg.cc/BnjzKQGq/3.png" />
                            </Link>
                            <Link to="" className="md:p-2 p-1 w-full">
                                <img alt="gallery" className="w-full h-full object-cover object-center block" src="https://dummyimage.com/600x360" />
                            </Link>
                        </div>
                        <div className="flex flex-wrap w-full md:w-1/2">
                            <Link to="" className="md:p-2 p-1 w-full">
                                <img alt="gallery" className="w-full h-full object-cover object-center block" src="https://dummyimage.com/601x361" />
                            </Link>
                            <Link to="/women" className="md:p-2 p-1 w-1/2">
                                <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://i.postimg.cc/sgbN9dV5/2.png" />
                            </Link>
                            <Link to="" className="md:p-2 p-1 w-1/2">
                                <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://i.postimg.cc/nL7w3Rzg/1.png" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            {/* ================================================================================================================================================= */}
            <section className="text-gray-600 body-font">
                <div className="container px-5 pt-10 mx-auto">
                    <h2 className="text-black text-2xl font-semibold font-protest tracking-widest title-font my-4 text-center">His Choice</h2>
                    <div className="grid grid-cols-4 -m-4 justify-between space-y-5">

                        {Men.map((item) => (

                            <div key={item} className="lg:w-[16rem] md:w-1/2 w-full flex flex-col items-center justify-center mt-[20px] mx-auto">
                                <Link to={item.to} className="block relative h-10 sm:h-20 lg:h-40 w-10 sm:w-20 lg:w-40 rounded-full overflow-hidden ">
                                    <img alt="e-commerce" className="object-cover object-center w-full h-full block" src={item.img} />
                                </Link>
                                <div className="mt-4 text-center">
                                    <h3 className="text-black text-[10px] sm:text-sm font-semibold font-lato tracking-widest title-font mb-1 hover:underline cursor-pointer">{item.type}</h3>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
                {/* ================================================================================================================================ */}
                <div className="container px-5 pt-5 py-20 mx-auto">
                    <h2 className="text-black text-2xl font-semibold font-protest tracking-widest title-font my-4 text-center">Her Choice</h2>
                    <div className="grid grid-cols-4 -m-4 justify-between space-y-5">

                        {Women.map((item) => (

                            <div key={item} className="lg:w-[16rem] md:w-1/2 p-4 w-full flex flex-col items-center justify-center mt-[20px] m-auto">
                                <Link to={item.to} className="block relative h-10 sm:h-20 lg:h-40 w-10 sm:w-20 lg:w-40 rounded-full overflow-hidden ">
                                    <img alt="e-commerce" className="object-cover object-center w-full h-full block" src={item.img} />
                                </Link>
                                <div className="mt-4 text-center">
                                    <h3 className="text-black text-[10px] sm:text-sm font-semibold font-lato tracking-widest title-font mb-1">{item.type}</h3>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </section>
        </div>
    )
}

export default Shop
