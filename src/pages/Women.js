import React from 'react'
import { Rating } from '@mui/material';
import WomenWear from '../API/WomensApi';
import { Link, useNavigate } from 'react-router-dom'

function Men() {
    const navigate = useNavigate();
    const NavToDetail = (item) => {
        navigate("/productdetails", { state: item })
    }

    // Function to shorten the title
    const shortenTitle = (title, maxLength) => {
        if (title.length <= maxLength) {
            return title;
        } else {
            return title.substring(0, maxLength) + '...';
        }
    };

    return (
        <div>
            <section className="text-gray-600 body-font">

                <div className="btn-grp flex items-center justify-center mt-10 space-x-5">
                    <div className="btn-grp flex items-center justify-center mt-10 space-x-5">
                        <Link to="/womenbottom">
                            <button className="bg-[#fff] hover:bg-black text-[#000] hover:text-white font-semibold py-1 px-1 w-auto sm:py-1 sm:px-3 text-xs sm:text-sm md:text-base border-2 border-black " >
                                Bottom
                            </button>
                        </Link>
                        <Link to="/shoe">
                            <button className="bg-[#fff] hover:bg-black text-[#000] hover:text-white font-semibold py-1 px-1 w-auto sm:py-1 sm:px-3 text-xs sm:text-sm md:text-base border-2 border-black " >
                                Shoe
                            </button>
                        </Link>
                        <Link to="/womentop">
                            <button className="bg-[#fff] hover:bg-black text-[#000] hover:text-white font-semibold py-1 px-1 w-auto sm:py-1 sm:px-3 text-xs sm:text-sm md:text-base border-2 border-black " >
                                Top
                            </button>
                        </Link>
                        <Link to="/accessories">
                            <button className="bg-[#fff] hover:bg-black text-[#000] hover:text-white font-semibold py-1 px-1 w-auto sm:py-1 sm:px-3 text-xs sm:text-sm md:text-base border-2 border-black " >
                                Accessories
                            </button>
                        </Link>
                    </div>
                </div>

                <div className="container px-9 sm:px-2 lg:px-1 pt-10 pb-24 mx-auto">
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 gap-3 items-center justify-center">

                        {WomenWear.WomenKurtiData.map((item) => (

                            <div key={item.id} className="w-auto sm:w-[90%] lg:w-[235px] p-4 border-2 border-black my-2">
                                <div onClick={() => NavToDetail(item)} className="relative rounded overflow-hidden flex items-center justify-center mx-auto">
                                    <img alt="e-commerce" className="object-cover w-28 lg:w-auto h-40 lg:h-auto block " src={item.main_img} />
                                </div>
                                <div className="mt-4">
                                    <div className="hidden lg:block">
                                        <Rating name={`rating-${item.id}`} value={item.rating} precision={0.5} readOnly className='block sm:hidden' />
                                    </div>
                                    <h3 className="text-gray-500 text-[10px] sm:text-xs tracking-widest mb-1">{item.brand}</h3>
                                    <h2 title={item.name} className="text-gray-900 text-xs sm:text-sm md:text-sm lg:text-md font-medium">{shortenTitle(item.name, 20)}</h2>

                                    <p className="mt-1 text-black font-medium mb-2"><span className='line-through mr-2'>{item.old_price}</span><span className='text-red-500 text-sm'>{item.price_off}</span> <br />₹{item.price}</p>
                                    {/* Buy Now button */}
                                    <button className="bg-[#fff] hover:bg-black text-[#000] hover:text-white font-semibold py-1 px-1 w-full sm:py-1 sm:px-3 text-[13px] sm:text-base border-2 border-black " >
                                        Buy Now
                                    </button>
                                </div>
                            </div>
                        ))
                        }
                    </div>

                </div>
            </section>
        </div>
    )
}

export default Men
