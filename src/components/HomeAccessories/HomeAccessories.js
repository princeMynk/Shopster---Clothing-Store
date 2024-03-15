import React from 'react'

import { Rating } from '@mui/material';
import { Link } from 'react-router-dom';

function HomeAccessories() {

    const Acc = [
        {
            id: 1,
            s_name: "ROYAL SON",
            p_type: "Men's Sunglasses",
            img: "https://i.postimg.cc/tgPWLwD6/2.png",
            rating: 4,
            price: "₨.599",
            to: "/accessories",
        },
        {
            id: 2,
            s_name: "SPYRONIX REAL",
            p_type: "Men's Pendent",
            img: "https://i.postimg.cc/QtJ5M72x/1.png",
            rating: 4.5,
            price: "₨.300",
            to: "/accessories",
        },
        {
            id: 3,
            s_name: "URBAN BOX",
            p_type: "Men's Shoes",
            img: "https://i.postimg.cc/Znfd8SYG/3.png",
            rating: 3,
            price: "₨.500",
            to: "/shoe",
        },
        {
            id: 4,
            s_name: "VAN HEUSEN",
            p_type: "Women's Watch",
            img: "https://i.postimg.cc/sgGhhqkL/4.png",
            rating: 4,
            price: "₨.1200",
            to: "/watch",
        },
        {
            id: 5,
            s_name: "CRISTIN",
            p_type: "Women's Shoes",
            img: "https://i.postimg.cc/rygxXSGf/5.png",
            rating: 4.5,
            price: "₨.499",
            to: "/shoe",
        },
        {
            id: 6,
            s_name: "MYKI",
            p_type: "Mens's Bracelet",
            img: "https://i.postimg.cc/BbZFP635/6.png",
            rating: 3,
            price: "₨.243",
            to: "/accessories",
        },
    ];


    return (

        <section className="px-10">
            <p className='items-center text-center text-[20px] sm:text-[28px] text-gray-700 font-roboslab font-medium'>Featured</p>
            <div className="container py-8 mx-auto">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 -m-4 h-full">

                    {Acc.map((item) => (

                        <div key={item.id} className="p-2 ">
                            <div className="bg-[#fff] p-2 sm:p-3 md:p-4 shadow-xl hover:shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset]  border-2 border-gray-700 transition-all duration-700">
                                <Link to={item.to}>
                                    <img className="sm:h-[15rem] lg:h-auto w-full object-cover object-center mb-4" src={item.img} alt="content" />

                                    <h3 class="text-gray-500 text-[10px] sm:text-xs tracking-widest mb-1">{item.p_type}</h3>
                                    <h2 class="text-gray-800 text-xs sm:text-sm md:text-base lg:text-md font-medium">{item.s_name}</h2>
                                    <div className="hidden sm:block">
                                        <Rating name={`rating-${item.id}`} value={item.rating} precision={0.5} readOnly className='block sm:hidden' />
                                    </div>
                                    <p className=" text-gray-800 font-medium mb-2 text-xs md:text-base lg:text-md">{item.price}</p>
                                    <button className="bg-[#fff] hover:bg-black text-gray-700 hover:text-white font-semibold py-1 px-1 sm:py-1 sm:px-3 text-[8px] sm:text-base border-2 border-gray-700 " >
                                        Buy Now
                                    </button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default HomeAccessories
