import React from 'react';
import { Rating } from '@mui/material';
import { Link } from 'react-router-dom';

function NewCollection() {
    const cards = [
        {
            id: 1,
            s_name: "MILDIN",
            p_type: "Mens Shirt",
            img: "https://i.postimg.cc/W33xp6CT/4.png",
            rating: 3.5,
            price: "₨.599",
            size: {
                xl: "XL",
                lg: "L",
                md: "MD",
                sm: "SM",
                xs: "XS",
            },
            to: "/men"
        },
        {
            id: 2,
            s_name: "HIGHLANDER",
            p_type: "Mens Jogger",
            img: "https://i.postimg.cc/fWFQLpMF/6.png",
            rating: 2.5,
            price: "₨.735",
            size: {
                xl: "XL",
                lg: "L",
                md: "MD",
                sm: "SM",
                xs: "XS",
            },
            to: "/men"
        },
        {
            id: 3,
            s_name: "FARBOT",
            p_type: "Mens Hoodie",
            img: "https://i.postimg.cc/rw1Bfp5X/2.png",
            rating: 4.5,
            price: "₨.1199",
            size: {
                xl: "XL",
                lg: "L",
                md: "MD",
                sm: "SM",
                xs: "XS",
            },
            to: "/men"
        },
        {
            id: 4,
            s_name: "HARPA",
            p_type: "Womens Top",
            img: "https://i.postimg.cc/CKJWV6vc/3.png",
            rating: 3,
            price: "₨.559",
            size: {
                xl: "XL",
                lg: "L",
                md: "MD",
                sm: "SM",
                xs: "XS",
            },
            to: "/women"
        },
        {
            id: 5,
            s_name: "KOTTY",
            p_type: "Womens Pants",
            img: "https://i.postimg.cc/JzCw3XD5/1.png",
            rating: 3,
            price: "₨.499",
            size: {
                xl: "XL",
                lg: "L",
                md: "MD",
                sm: "SM",
                xs: "XS",
            },
            to: "/women"
        },
        {
            id: 6,
            s_name: "SHIN",
            p_type: "Mens Hoodie",
            img: "https://i.postimg.cc/ydbtD3C9/5.png",
            rating: 4,
            price: "₨.699",
            size: {
                xl: "XL",
                lg: "L",
                md: "MD",
                sm: "SM",
                xs: "XS",
            },
            to: "/men"
        },
    ];

    return (
        <section className="px-10 pt-4">
            <p className='items-center text-center text-[20px] sm:text-[28px] text-gray-800 font-roboslab font-medium'>Bestseller</p>
            <div className="container py-4 mx-auto">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 -m-4 h-full">
                    {cards.map((item) => (
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
                                    {/* Displaying size options as buttons */}
                                    {/* <div className="flex">
                                    {Object.entries(item.size).map(([sizeKey, sizeValue]) => (
                                        <button key={sizeKey} className="mr-1 bg-gray-400 px-2 py-1 text-xs text-black font-nunitoSans font-semibold">{sizeValue}</button>
                                    ))}
                                </div> */}
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default NewCollection;
