import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { remove, increaseQuantity, decreaseQuantity } from '../Redux/Slice';
import CurrentDate from "../components/Date/Date";
import { RiDeleteBin6Line } from 'react-icons/ri';
import { IoMailOutline } from "react-icons/io5";
import EmptyCart from '../components/EmptyCart/EmptyCart';
import { useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { Bounce, toast } from 'react-toastify';

function Cart() {
    // const [latestCart, setLatestCart] = React.useState([])
    const { isAuthenticated, user, loginWithRedirect } = useAuth0();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    let cartItems = JSON.parse(localStorage.getItem("cartItems"))

    const items = useSelector((state) => state.cart);


    const handleDelete = (item) => {
        dispatch(remove(item.id));
    };

    const handleIncreaseQuantity = (item) => {
        dispatch(increaseQuantity(item.id));
    };

    const handleDecreaseQuantity = (item) => {
        dispatch(decreaseQuantity(item.id));
    };

    const calculateTotalPrice = () => {
        let totalPrice = 0;
        items.forEach((item) => { // Corrected from items.foreach to items.forEach
            totalPrice += item.price * item.quantity;
        });
        return totalPrice;
    };

    const handleCheckout = () => {
        if (isAuthenticated) {
            navigate("/checkout");
        } else {
            toast.warn('Please Login', {
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
            loginWithRedirect({});
        }
    };

    return (
        <div>
            <div className="py-14 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
                <div className="flex justify-between ">
                    <div>
                        {isAuthenticated ? (
                            <h1 className="text-base sm:text-xl lg:text-2xl font-semibold leading-7 lg:leading-9 text-gray-800">{user.name} Order</h1>
                        ) : (
                            <h1 className="text-base sm:text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800">Your Order</h1>
                        )}
                        <p className="text-base font-medium leading-6 text-gray-600 hidden sm:block"><CurrentDate /></p>
                    </div>

                    {cartItems.length > 0 ? (
                        <div className='space-x-2'>
                            <button onClick={handleCheckout}
                                className="py-2 px-2 bg-[#fff] text-[#000] hover:text-white hover:bg-[#000] w-32 sm:w-40 md:w-auto text-base font-medium leading-4 border-2 border-black ">
                                Place Order
                            </button>
                            {/* <button onClick={clearCart}
                                className=" py-2 px-2 bg-[#fff] text-[#000] hover:text-red-900 w-96 md:w-auto text-base font-medium leading-4 border-2 border-[#000] hover:border-red-900 ">
                                    Clear Cart
                            </button> */}
                        </div>
                    ) : (
                        null
                    )
                    }

                </div>
                {
                    cartItems.length > 0 ? (
                        <div className="mt-10 flex flex-col xl:flex-row justify-center items-stretch  w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
                            <div className="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
                                <p className="text-lg md:text-xl font-semibold leading-6 xl:leading-5 text-gray-800">Customer’s Cart</p>
                                {cartItems.map((item) => {
                                    console.log("iiiiiiiiiiiiii",item,cartItems)
                                    return (

                                        <div className="flex flex-col justify-start items-start bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
                                            <div className="mt-4 md:mt-6 flex flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full ">
                                                <div className="pb-4 md:pb-8 w-full md:w-40">
                                                    <img className="w-full hidden md:block" src={item?.main_img} alt="dress" />
                                                    <img className="w-full md:hidden" src={item?.main_img} alt="dress" />
                                                </div>
                                                <div className="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full  pb-8 space-y-4 md:space-y-0">
                                                    <div className="w-full flex flex-col justify-start items-start space-y-8">
                                                        <h3 className="text-sm sm:text-lg xl:text-xl font-semibold leading-6 text-gray-800">{item?.name}</h3>
                                                        <div className="flex justify-start items-start flex-col space-y-2">

                                                            <p className="text-[14px] sm:text-base leading-none text-gray-800">
                                                                <span className="text-gray-500">Size:  </span> {item?.size}
                                                            </p>
                                                            <p className="text-[14px] sm:text-base leading-none text-gray-800">
                                                                <span className="text-gray-500">Color: </span> -
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center justify-between w-full">
                                                        <p className="text-base xl:text-lg leading-6">
                                                            ₹{item?.price} <span className="text-red-300 line-through"> {item?.old_price}</span>
                                                        </p>

                                                        <div className='flex items-center justify-center'>
                                                            <button className="text-[15px] sm:text-[30px] text-red-600" onClick={() => handleDecreaseQuantity(item)} > -</button>
                                                            <p className="text-sm sm:text-xl mx-5">{item?.quantity}</p>
                                                            <button className="text-[15px] sm:text-[30px] text-green-600" onClick={() => handleIncreaseQuantity(item)}>+ </button>
                                                        </div>

                                                        <div className='mt-3'>
                                                            <button className="text-base xl:text-lg font-semibold leading-6 text-gray-800" onClick={() => handleDelete(item)}>
                                                                <RiDeleteBin6Line />
                                                            </button>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}

                                <div className="flex justify-center md:flex-row flex-col items-stretch w-full space-y-4 md:space-y-0 md:space-x-6 xl:space-x-8">
                                    {/* TOTAL CALCULATE */}
                                    <div className="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 space-y-6   ">
                                        <h3 className="text-base sm:text-xl font-semibold leading-5 text-gray-800">Summary</h3>
                                        <div className="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
                                            <div className="flex justify-between  w-full">
                                                <p className="text-sm sm:text-base leading-4 text-gray-800">Subtotal</p>
                                                <p className="text-sm sm:text-base leading-4 text-gray-600">₹{calculateTotalPrice()}</p>
                                            </div>
                                            <div className="flex justify-between items-center w-full">
                                                <p className="text-sm sm:text-base leading-4 text-gray-800">
                                                    Discount <span className="bg-gray-200 p-1 text-xs font-medium leading-3 text-gray-800">SHOPSTER</span>
                                                </p>
                                                <p className="text-sm sm:text-base leading-4 text-gray-600"> (-)</p>
                                            </div>
                                            <div className="flex justify-between items-center w-full">
                                                <p className="text-sm sm:text-base leading-4 text-gray-800">Shipping</p>
                                                <p className="text-sm sm:text-base leading-4 text-gray-600">₹75</p>
                                            </div>
                                        </div>
                                        <div className="flex justify-between items-center w-full">
                                            <p className="text-base font-semibold leading-4 text-gray-800">Total</p>
                                            <p className="text-base font-semibold leading-4 text-gray-600">₹{calculateTotalPrice() + 75}</p>
                                        </div>
                                    </div>

                                    <div className="flex flex-col justify-center px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 space-y-6   ">
                                        <h3 className="text-base sm:text-xl font-semibold leading-5 text-gray-800">Shipping</h3>
                                        <div className="flex justify-between items-start w-full">
                                            <div className="flex justify-center items-center space-x-4">
                                                <div class="w-6 sm:w-8 h-6 sm:h-8">
                                                    <img class="w-full h-full" alt="logo" src="https://i.ibb.co/L8KSdNQ/image-3.png" />
                                                </div>
                                                <div className="flex flex-col justify-start items-center">
                                                    <p className="text-sm sm:text-lg leading-6 font-semibold text-gray-800">
                                                        DPD Delivery
                                                        <br />
                                                        <span className="font-normal">Delivery with 24 Hours</span>
                                                    </p>
                                                </div>
                                            </div>
                                            <p className="text-lg font-semibold leading-6 text-gray-800">₹75.00</p>
                                        </div>
                                        <div className="w-full flex justify-center items-center">
                                            <button className="hover:bg-black py-2 sm:py-5 w-96 md:w-full bg-gray-800 text-base font-medium leading-4 text-white">View Carrier Details</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-50 h-fit w-full xl:w-96 flex justify-between items-center md:items-start px-4 py-6 md:p-6 xl:p-8 flex-col ">
                                <h3 className="text-xl font-semibold leading-5 text-gray-800">Customer</h3>
                                <div className="flex  flex-col md:flex-row xl:flex-col justify-start items-stretch h-full w-full md:space-x-6 lg:space-x-8 xl:space-x-0 ">
                                    <div className="flex flex-col justify-start items-start flex-shrink-0">
                                        <div className="flex justify-center w-full md:justify-start items-center space-x-4 py-8 border-b border-gray-200">
                                            <img src="https://i.ibb.co/5TSg7f6/Rectangle-18.png" alt="avatar" />
                                            <div className=" flex justify-start items-start flex-col space-y-2">
                                                <p className="text-base font-semibold leading-4 text-left text-gray-800">Prince mynk</p>
                                                <p className="text-sm leading-5 text-gray-600">10 Previous Orders</p>
                                            </div>
                                        </div>

                                        <div className="flex justify-center  md:justify-start items-center space-x-4 py-4 border-b border-gray-200 w-full">
                                            <IoMailOutline className='text-xl' />
                                            <p className="cursor-pointer text-sm leading-5 text-gray-800">mmgurjar9514@gmail.com</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-between xl:h-full  items-stretch w-full flex-col mt-6 md:mt-0">
                                        <div className="flex justify-center md:justify-start xl:flex-col flex-col md:space-x-6 lg:space-x-8 xl:space-x-0 space-y-4 xl:space-y-12 md:space-y-0 md:flex-row  items-center md:items-start ">
                                            <div className="flex justify-center md:justify-start  items-center md:items-start flex-col space-y-4 xl:mt-8">
                                                <p className="text-base font-semibold leading-4 text-center md:text-left text-gray-800">Shipping Address</p>
                                                <p className="w-48 lg:w-full xl:w-48 text-center md:text-left text-sm leading-5 text-gray-600">180 North King Street, Northhampton MA 1060</p>
                                            </div>
                                            <div className="flex justify-center md:justify-start  items-center md:items-start flex-col space-y-4 ">
                                                <p className="text-base font-semibold leading-4 text-center md:text-left text-gray-800">Billing Address</p>
                                                <p className="w-48 lg:w-full xl:w-48 text-center md:text-left text-sm leading-5 text-gray-600">180 North King Street, Northhampton MA 1060</p>
                                            </div>
                                        </div>
                                        <div className="flex w-full justify-center items-center md:justify-start md:items-start">
                                            <button className="mt-6 md:mt-0 py-3 sm:py-5 hover:bg-gray-200 border border-gray-800 font-medium w-96 2xl:w-full text-base leading-4 text-gray-800">Edit details</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (<EmptyCart />)
                }

            </div>
        </div>
    )
}

export default Cart
