import React, { useState } from 'react'
import Logo from "../NavbarMain/logoipsum-215.svg"

import { Link } from 'react-router-dom';

import { FiInstagram } from "react-icons/fi";
import { FiFacebook } from "react-icons/fi";
import { FaGoogle } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";

function Footer() {

    const [email, setEmail] = useState('');

    const sendMail = () => {
        console.log('Submitted Email:', email);
    };

    const handleChange = (e) => {
        setEmail(e.target.value);
    };

    return (

        <div className='bg-slate-100 border-t-2 border-gray-300 bg-gray-200'>
            <footer className="text-gray-600 body-font">
                <div className="container px-5 pt-5 pb-2 mx-auto">
                    <div className="flex flex-col md:flex-row md:text-left justify-evenly order-first">
                        
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4 flex flex-col justify-start sm:justify-center items-center sm:items-start">
                            <h2 className="title-font font-barlow font-medium text-gray-900 tracking-widest text-[16px] mb-3">ABOUT US</h2>
                            <nav className="list-none mb-5 md:mb-10">
                                <li className='mb-3'>
                                    <Link to="/" className="text-black font-lato "><span className=' hover:text-gray-400'>Shopster</span> Pvt Ltd</Link>
                                </li>
                                <li className='text-center sm:text-start'>
                                    <p className="text-black font-lato">Explore to CHANGE. <br /><Link to="/" className='underline hover:text-slate-400'>Learn More...</Link></p>
                                </li>
                            </nav>
                        </div>

                        <hr className='flex w-[10rem] h-[0.1rem] border-none rounded-[10px] bg-[#c7c7c7] md:w-[0.1rem] md:h-[13rem] mb-5 md:mb-0 sm:block md:hidden lg:block mx-auto' />

                        <div className="lg:w-1/4 md:w-1/2 w-full px-4 items-center text-center">
                            <h2 className="title-font font-barlow font-medium text-gray-900 tracking-widest text-[16px] mb-3">POLICIES</h2>
                            <nav className="list-none mb-5 md:mb-10">
                                <li className='mb-2'>
                                    <Link to="/return" className="text-black font-lato text-sm hover:text-gray-400">Return Your Order</Link>
                                </li>
                                <li className='mb-2'>
                                    <Link to="/shippingpolicy" className="text-black font-lato text-sm hover:text-gray-400">Shipping Policy</Link>
                                </li>
                                <li className='mb-2'>
                                    <Link to="/rrc" className="text-black font-lato text-sm hover:text-gray-400">Return, Refund, and Cancellation</Link>
                                </li>
                                <li className='mb-2'>
                                    <Link to="/termscondition" className="text-black font-lato text-sm hover:text-gray-400">Terms and Conditions</Link>
                                </li>
                                <li className='mb-2'>
                                    <Link to="/privacypolicy" className="text-black font-lato text-sm hover:text-gray-400">Privacy Policy</Link>
                                </li>
                                <li className='mb-2'>
                                    <Link to="/fraudprotection" className="text-black font-lato text-sm hover:text-gray-400">Fraud Protection</Link>
                                </li>
                            </nav>
                        </div>

                        <hr className='flex w-[10rem] h-[0.1rem] border-none rounded-[10px] bg-[#c7c7c7] md:w-[0.1rem] md:h-[13rem] mb-5 md:mb-0 sm:block md:hidden lg:block mx-auto' />
                        
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4 flex flex-col items-center sm:items-end justify-center">
                            <h2 className="title-font font-barlow font-medium text-gray-900 tracking-widest text-[16px] mb-3">NEWSLETTER </h2>
                            <p className="text-black text-sm mt-2 mb-4 flex flex-col text-center sm:text-end w-60">
                                You can be the first one to know about oue releases, latest offers and more.
                                <label for="footer-field" className="leading-7 text-sm text-gray-600"> <Link to="Link.com" className='underline'>Sign up now!</Link> </label>
                            </p>
                            <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">

                                <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                                    <input type="email" name="email" onChange={handleChange} id="newsletter-email" placeholder="Your email . . . "
                                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-700 focus:bg-transparent text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>

                                <button type='submit' onClick={sendMail}
                                    className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-gradient-to-r from-[#eb84e9] to-blue-500 border-0 py-2 px-2 sm:px-6 focus:outline-none hover:bg-indigo-600 rounded">
                                    Submit
                                </button>
                            </div>
                        </div>
                        
                    </div>
                </div>
{/* =========================================================================================================================================================================== */}
{/* =========================================================================================================================================================================== */}
                <div className="bg-slate-200 pt-2 border-t-2 border-gray-400">
                    <div className="container px-5 py-2 mx-auto flex items-center sm:flex-row flex-col">
                        <Link to="/" className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                            <img src={Logo} alt="LOGO" />
                            {/* <span className="ml-3 text-xl">Shopster</span> */}
                        </Link>
                        <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">© 2020 Shopster —
                            <Link to="https://twitter.com/knyttneve" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">@princeMynk</Link>
                        </p>
                        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                            <span className="text-gray-500">
                                <Link to="https://www.facebook.com/" target='_blank'><FiFacebook className='text-slate-500 text-2xl hover:text-gray-700' /></Link>
                            </span>
                            <span className="ml-3 text-gray-500">
                                <Link to="https://www.twitter.com/" target='_blank'><FaTwitter className='text-slate-500 text-2xl hover:text-gray-700' /></Link>
                            </span>
                            <span className="ml-3 text-gray-500">
                                <Link to="https://www.instagram.com/" target='_blank'><FiInstagram className='text-slate-500 text-2xl hover:text-gray-700' /></Link>
                            </span>
                            <span className="ml-3 text-gray-500">
                                <Link to="https://www.google.com/" target='_blank'><FaGoogle className='text-slate-500 text-2xl hover:text-gray-700' /></Link>
                            </span>
                        </span>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
