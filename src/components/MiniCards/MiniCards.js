import React from 'react';
import { FaTruck } from "react-icons/fa";
import { IoMailUnread } from "react-icons/io5";
import { MdOutlineRepeat } from "react-icons/md";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function MiniCards() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <div>

            <section className="text-gray-600 body-font hidden md:block">
                <div className="container px-5 pt-3 pb-10 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        <div className="p-4 md:w-1/3">
                            <div className="flex items-center rounded-2xl shadow-lg h-full p-8 flex-col hover:shadow-slate-700 transition-all duration-700 ease-in-out">
                                <div className="flex flex-col items-center mb-3">
                                    <div className="w-16 h-16 mr-3 inline-flex items-center justify-center text-black flex-shrink-0">
                                        <FaTruck className='size-16' />
                                    </div>
                                    <h2 className="text-gray-900 text-lg title-font font-medium mt-5">FREE & FAST DELIVERY</h2>
                                </div>
                                <div className="flex-grow">
                                    <p className="mt-3 text-black inline-flex flex-wrap items-center">
                                        Shipping within 48 hours across India.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="p-4 md:w-1/3">
                            <div className="flex items-center rounded-2xl shadow-lg h-full p-8 flex-col hover:shadow-slate-700 transition-all duration-700 ease-in-out">
                                <div className="flex flex-col items-center mb-3">
                                    <div className="w-16 h-16 mr-3 inline-flex items-center justify-center text-black flex-shrink-0">
                                        <IoMailUnread className='size-16' />
                                    </div>
                                    <h2 className="text-gray-900 text-lg title-font font-medium mt-5">CONTACT US</h2>
                                </div>
                                <div className="flex-grow">
                                    <p className="mt-3 text-black lg:inline-flex items-center text-center">
                                        Write us at <a href="mailto:mmgurjar9514@gmail.com?subject=Subject&body=Body" className='underline'>@Shopster</a>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="p-4 md:w-1/3">
                            <div className="flex items-center rounded-2xl shadow-lg h-full p-8 flex-col hover:shadow-slate-700 transition-all duration-700 ease-in-out">
                                <div className="flex flex-col items-center mb-3">
                                    <div className="w-16 h-16 mr-3 inline-flex items-center justify-center text-black flex-shrink-0">
                                        <MdOutlineRepeat className='size-16' />
                                    </div>
                                    <h2 className="text-gray-900 text-lg title-font font-medium mt-5">RETURN POLICY</h2>
                                </div>
                                <div className="flex-grow">
                                    <p className="mt-3 text-black inline-flex items-center">
                                        Returns within 7 days.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ============================================================================================================================================================================ */}

            <section className="text-gray-600 body-font block md:hidden">
                <div className="container px-5 pt-3 pb-10 mx-auto">
                    <Slider {...settings}>
                        <div className="p-4 md:w-1/3">
                            <div className="flex items-center rounded-2xl shadow-lg h-full p-8 flex-col hover:shadow-slate-700 transition-all duration-700 ease-in-out">
                                <div className="flex flex-col items-center mb-3">
                                    <div className="w-16 h-16 mr-3 inline-flex items-center justify-center text-black flex-shrink-0">
                                        <FaTruck className='size-16' />
                                    </div>
                                    <h2 className="text-gray-900 text-lg title-font font-medium mt-5">FREE & FAST DELIVERY</h2>
                                </div>
                                <div className="flex-grow">
                                    <p className="mt-3 text-black inline-flex flex-wrap items-center">
                                        Shipping within 48 hours across India.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="p-4 md:w-1/3">
                            <div className="flex items-center rounded-2xl shadow-lg h-full p-8 flex-col hover:shadow-slate-700 transition-all duration-700 ease-in-out">
                                <div className="flex flex-col items-center mb-3">
                                    <div className="w-16 h-16 mr-3 inline-flex items-center justify-center text-black flex-shrink-0">
                                        <IoMailUnread className='size-16' />
                                    </div>
                                    <h2 className="text-gray-900 text-lg title-font font-medium mt-5">CONTACT US</h2>
                                </div>
                                <div className="flex-grow">
                                    <p className="mt-3 text-black inline-flex items-center ">
                                        Write us at <span href="mailto:mmgurjar9514@gmail.com?subject=Subject&body=Body" className='hover:underline'>@Shopster</span>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="p-4 md:w-1/3">
                            <div className="flex items-center rounded-2xl shadow-lg h-full p-8 flex-col hover:shadow-slate-700 transition-all duration-700 ease-in-out">
                                <div className="flex flex-col items-center mb-3">
                                    <div className="w-16 h-16 mr-3 inline-flex items-center justify-center text-black flex-shrink-0">
                                        <MdOutlineRepeat className='size-16' />
                                    </div>
                                    <h2 className="text-gray-900 text-lg title-font font-medium mt-5">RETURN POLICY</h2>
                                </div>
                                <div className="flex-grow">
                                    <p className="mt-3 text-black inline-flex items-center">
                                        Returns within 7 days.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </section>
        </div>
    );
}

export default MiniCards;
