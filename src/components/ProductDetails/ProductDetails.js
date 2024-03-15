import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { RiHeart2Line } from "react-icons/ri";
import { FaOpencart } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { add } from '../../Redux/Slice';
import { toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import "../ProductDetails/Style.css"
import Review from '../Review\'s Page/Review';

function ProductDetails() {
    const dispatch = useDispatch();

    const location = useLocation();
    const product = location.state;

    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);
    const [productdata, setProductdata] = useState(product);
    let initialState = JSON.parse(localStorage.getItem("cartItems")) || [];

    const Sizes = ['S', 'M', 'L', 'XL', 'XXL'];

    const SizeAdd = (Size) => {
        setProductdata({ ...productdata, size: Size });
    }

    const addToCart = (id) => {
        let filteredCart = initialState.filter((item) =>
            item.id === productdata.id 
        )
        console.log("filteredCart items :", filteredCart, initialState, id);
        if (!productdata.size) {
            toast.warn('Please Select Size First', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
            });
        }
        else {
            if (filteredCart?.length === 0) {
                dispatch(add(id))
                console.log(id);
                toast.success('Product Added Successfully', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    transition: Bounce,
                });
            } else {
                toast.error('Already Added to cart..!!', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    transition: Bounce,
                });
            }
        }
    }

    // const addToWishlist = (id) => {
    //     let filteredCart = initialState.filter((item) =>
    //         item.id === productdata.id && item.size === productdata.size
    //     )
    //     console.log("filteredCart items :", filteredCart, initialState, id);
    //     if (!productdata.size) {
    //         toast.warn('Please Select Size First', {
    //             position: "top-right",
    //             autoClose: 2000,
    //             hideProgressBar: false,
    //             closeOnClick: true,
    //             pauseOnHover: true,
    //             draggable: true,
    //             progress: undefined,
    //             theme: "dark",
    //             transition: Bounce,
    //         });
    //     }
    //     else {
    //         if (filteredCart?.length === 0) {
    //             dispatch(add(id))
    //             console.log(id);
    //             toast.success('Product Added Successfully', {
    //                 position: "top-right",
    //                 autoClose: 2000,
    //                 hideProgressBar: false,
    //                 closeOnClick: true,
    //                 pauseOnHover: true,
    //                 draggable: true,
    //                 progress: undefined,
    //                 theme: "dark",
    //                 transition: Bounce,
    //             });
    //         } else {
    //             toast.error('Already Added to cart..!!', {
    //                 position: "top-right",
    //                 autoClose: 2000,
    //                 hideProgressBar: false,
    //                 closeOnClick: true,
    //                 pauseOnHover: true,
    //                 draggable: true,
    //                 progress: undefined,
    //                 theme: "dark",
    //                 transition: Bounce,
    //             });
    //         }
    //     }
    // }
    const navigate = useNavigate();
    const NavToWishlist = (productdata) => {
        navigate("/wishlist", { state: productdata })
    }

    const changeImg = () => {
        
    }

    return (
        <div>
            <section className="overflow-hidden transition-all">
                <div className="container py-10 mx-auto">
                    <div className="lg:w-[90%] mx-auto flex flex-wrap px-9 sm:px-7 md:px-5 lg:px-3 xl:px-1 ">

                        <div className='hidden lg:flex'>

                            <div>
                                <img alt="e-commerce" onClick={changeImg()} className="w-full lg:w-[6rem] h-64 lg:h-[8rem] mb-4 object-cover object-center rounded" src={productdata.item_img_1} />
                                <img alt="e-commerce" onClick={changeImg()} className="w-full lg:w-[6rem] h-64 lg:h-[8rem] mb-4 object-cover object-center rounded" src={productdata.item_img_2} />
                                <img alt="e-commerce" onClick={changeImg()} className="w-full lg:w-[6rem] h-64 lg:h-[8rem] mb-4 object-cover object-center rounded" src={productdata.item_img_3} />
                                <img alt="e-commerce" onClick={changeImg()} className="w-full lg:w-[6rem] h-64 lg:h-[8rem] object-cover object-center rounded" src={productdata.item_img_4} />
                            </div>
                            <img alt="e-commerce" className=" w-full lg:w-[26rem] h-64 lg:h-[35rem] ml-4 object-cover object-center rounded" src={productdata.main_img} />
                        </div>

                        <div className='block lg:hidden'>
                            <div className="relative flex items-center justify-center w-full dark:text-gray-50">

                                <div className="flex items-center justify-start w-full h-full gap-6 py-4 mx-auto overflow-auto lg:gap-8">
                                    <div className="relative flex flex-shrink-0 w-full sm:w-auto">
                                        <img className="object-cover object-center dark:bg-gray-500 h-[500px] md:h-[600px] w-[300px] md:w-[400px] aspect-square" src={productdata.main_img} alt="Image1" />
                                    </div>
                                    <div className="relative flex flex-shrink-0 w-full sm:w-auto">
                                        <img className="object-cover object-center dark:bg-gray-500 h-[500px] md:h-[600px] w-[300px] md:w-[400px] aspect-square" src={productdata.item_img_1} alt="Image2" />
                                    </div>
                                    <div className="relative flex flex-shrink-0 w-full sm:w-auto">
                                        <img className="object-cover object-center dark:bg-gray-500 h-[500px] md:h-[600px] w-[300px] md:w-[400px] aspect-square" src={productdata.item_img_2} alt="Image3" />
                                    </div>
                                    <div className="relative flex flex-shrink-0 w-full sm:w-auto">
                                        <img className="object-cover object-center dark:bg-gray-500 h-[500px] md:h-[600px] w-[300px] md:w-[400px] aspect-square" src={productdata.item_img_3} alt="Image4" />
                                    </div>
                                    <div className="relative flex flex-shrink-0 w-full sm:w-auto">
                                        <img className="object-cover object-center dark:bg-gray-500 h-[500px] md:h-[600px] w-[300px] md:w-[400px] aspect-square" src={productdata.item_img_4} alt="Image5" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="lg:w-[35%] md:w-[40%] w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <h2 className="text-sm md:text-md title-font text-black font-medium tracking-widest">{productdata.brand}</h2>
                            <h1 className="text-gray-900 text-[20px] sm:text-2xl md:text:3xl title-font font-medium mb-1 mt-2">{productdata.name}</h1>

                            <div className="flex mt-5 items-center pb-5 border-b-2 border-gray-100 mb-5">
                                {/* Size dropdown */}
                                <div className="flex flex-col items-start">

                                    <span className="mr-3">Size: </span>
                                    <br />
                                    <div className="relative space-x-3 grid grid-cols-5">
                                        {Sizes.map((item) => (

                                            <button key={item} onClick={() => SizeAdd(item)} className={`${item === productdata.size ? 'border-white bg-black text-white ' : 'border-2 border-black text-black'}  py-1 text-sm px-2 `}>
                                                {item}
                                            </button>
                                        ))}

                                    </div>
                                </div>
                            </div>
                            <div className="flex">
                                {/* Product price and offer */}
                                <div className="title-font font-medium text-xl md:text-2xl text-gray-900">₹{productdata.price}
                                    <br className='hidden md:block ' />
                                    <span className='line-through text-[15px] md:text-[20px] text-gray-500 ml-2'>{productdata.old_price}</span>
                                    <span className='ml-1 text-center text-[15px] text-green-600'>{productdata.price_off}</span>
                                </div>
                            </div>

                            {/* Buttons */}
                            <div className='flex mt-5 space-x-5 '>
                                {/* Add to Cart button */}

                                <button onClick={() => addToCart(productdata)}
                                    className="CartBtn flex items-center bg-white border border-gray-300 rounded-md shadow-sm px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                    <span className="IconContainer">
                                        <FaOpencart className='cart' />
                                    </span>
                                    <p className="text ml-2 h-full w-fit flex items-center justify-center text-[#000] z-[1] duration-500 font-[1.04em] font-600 ">Add to Cart</p>
                                </button>

                                {/* Wishlist button */}
                                <button onClick={() => NavToWishlist(productdata)}
                                    className="rounded-full w-13 h-13 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                                    <RiHeart2Line className='hover:fill-pink-500 text-2xl sm:text-3xl' />
                                </button>
                            </div>

                            <div>
                                <div className="border-t border-b py-4 mt-7 border-gray-200">
                                    <div onClick={() => setShow(!show)} className="flex justify-between items-center cursor-pointer">
                                        <p className="text-sm sm:text-base leading-4 text-gray-800">Shipping and returns</p>
                                        <button
                                            className="cursor-pointer "
                                            aria-label="show or hide"
                                        >
                                            <svg className={"transform " + (show ? "rotate-180" : "rotate-0")} width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9 1L5 5L1 1" stroke="#4B5563" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </button>
                                    </div>
                                    <div className={"pt-4 text-sm sm:text-base leading-normal pr-12 mt-4 text-gray-600 " + (show ? "block" : "hidden")} id="sect">
                                        You will be responsible for paying for your own shipping costs for returning your item. Shipping costs are nonrefundable
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="border-b py-4 border-gray-200 ">
                                    <div onClick={() => setShow2(!show2)} className="flex justify-between items-center cursor-pointer">
                                        <p className="text-sm sm:text-base leading-4 text-gray-800 ">Contact us</p>
                                        <button
                                            className="cursor-pointer "
                                            aria-label="show or hide"
                                        >
                                            <svg className={"transform " + (show2 ? "rotate-180" : "rotate-0")} width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9 1L5 5L1 1" stroke="#4B5563" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </button>
                                    </div>
                                    <div className={"pt-4 text-sm sm:text-base leading-normal pr-12 mt-4 text-gray-600 " + (show2 ? "block" : "hidden")} id="sect">
                                        If you have any questions on how to return your item to us, contact us.
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="lg:col-span-3 mt-10">
                            <Review />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ProductDetails;

