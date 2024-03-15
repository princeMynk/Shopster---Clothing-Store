import React from 'react'
import { Rating } from '@mui/material';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// import { useEffect, useState } from 'react'
// import { useLocation } from 'react-router-dom'

function WishList() {

    // const [wishlistData, setWishlistData] = useState([]);
    // const location = useLocation();

    // useEffect(() => {
    //     setWishlistData([...wishlistData, location.state]);
    // }, [])

    // Function to shorten the title
    const shortenTitle = (title, maxLength) => {
        if (title.length <= maxLength) {
            return title;
        } else {
            return title.substring(0, maxLength) + '...';
        }
    };

    const items = useSelector((state) => state.cart);

    const navigate = useNavigate();
    const NavToDetail = (product) => {
        navigate ("/productdetails", { state: product })
    }

    return (
        <div>
            <section class="text-gray-600 body-font">

                <div className="container px-9 sm:px-2 lg:px-1 pt-10 pb-24 mx-auto">
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 gap-3 items-center justify-center">

                        {
                            items.map((product) => (

                                <div key={product.id} className="w-auto sm:w-[90%] lg:w-[235px] p-4 border-2 border-black my-2">
                                    <div
                                        onClick={() => NavToDetail(product)}
                                        className="relative rounded overflow-hidden flex items-center justify-center mx-auto cursor-pointer">
                                        <img alt="e-commerce" className="object-cover w-28 lg:w-auto h-40 lg:h-auto block " src={product.main_img} />
                                    </div>
                                    <div className="mt-4">
                                        <div className="hidden lg:block">
                                            <Rating name={`rating-${product.id}`} value={product.rating} precision={0.5} readOnly className='block sm:hidden' />
                                        </div>
                                        <h3 className="text-gray-500 text-[10px] sm:text-xs tracking-widest mb-1">{product.brand}</h3>
                                        <h2 title={product.name} className="text-gray-900 text-xs sm:text-sm md:text-sm lg:text-md font-medium">{shortenTitle(product.name, 20)}</h2>

                                        <p className="mt-1 text-black font-medium mb-2"><span className='line-through mr-2'>{product.old_price}</span><span className='text-red-500 text-sm'>{product.price_off}</span> <br />₹{product.price}</p>
                                        {/* Buy Now button */}
                                        <button
                                            onClick={() => NavToDetail(product)}
                                            className="bg-[#fff] hover:bg-black text-[#000] hover:text-white font-semibold py-1 px-1 w-full sm:py-1 sm:px-3 text-[13px] sm:text-base border-2 border-black cursor-pointer" >
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

export default WishList
