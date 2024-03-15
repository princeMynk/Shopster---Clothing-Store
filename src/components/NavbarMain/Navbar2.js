import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { RxMagnifyingGlass } from "react-icons/rx";
import { BiLogInCircle } from "react-icons/bi";
import { BiLogOutCircle } from "react-icons/bi";
import { FiMail } from "react-icons/fi";
import { TbShoppingBag } from "react-icons/tb";
import Badge from '@mui/material/Badge';
import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from "react-icons/md";
import { useSelector } from 'react-redux';
import Hamburger from 'hamburger-react';
import logo from "./logoipsum-215.svg";

import { useAuth0 } from "@auth0/auth0-react";
import Profile from '../ProfileAvatar/Profile';

function Navbar2() {
    const items = useSelector((state) => state.cart);

    const [isOpen, setOpen] = useState(false);

    const names = [
        'Shipping In 72 Hours !!!',
        'Fastest Delivery',
        'Secure Payment',
        'Great Deals ',
        'Unbeatable Prices'
    ];

    const [newName, setnewName] = useState("");

    const shuffle = useCallback(() => {
        const index = Math.floor(Math.random() * names.length);
        setnewName(names[index]);
    }, [names]);

    useEffect(() => {
        const intervalID = setInterval(shuffle, 1500);
        return () => clearInterval(intervalID);
    }, [shuffle]);

    const { loginWithRedirect } = useAuth0();
    const { logout } = useAuth0();
    const { isAuthenticated } = useAuth0();

    return (
        <div className='header flex flex-col items-center top-0 left-0 w-full transition-all border-b-2 sticky z-50 bg-[#fff]'>
            <div className="bg-[#84919d] flex items-center justify-center gap-10 sm:gap-20 md:gap-28 py-1 w-full duration-150">
                <MdKeyboardDoubleArrowLeft className='my-auto' />
                <p className='text-[12px] sm:text-[15px] font-semibold font-roboslab'>{newName}</p>
                <MdKeyboardDoubleArrowRight className='my-auto' />
            </div>
            <nav className='w-full'>
                <div className="flex items-center justify-between px-2 sm:px-12 py-2 ">
                    <div className='flex items-center jus'>
                        <button className="lg:text-4xl xl:text-5xl 2xl:text-6xl cursor-pointer text-[#000] inline-flex md:hidden">
                            <Hamburger size={20} toggled={isOpen} toggle={setOpen} />
                        </button>
                            <ul className={isOpen ? "text-[#000] z-50 overflow-hidden fixed p-[16px_40px] pb-[10px] right-[20%] sm:right-[50%] top-[13.3%] sm:top-[13.9%] w-[80%] sm:w-[50%] duration-500 ease-in-out bg-transparent backdrop-blur-lg border-r-4 border-[#8e8e8e] h-screen transition-all" : "z-50 overflow-hidden fixed duration-300 ease-in-out h-screen top-[13.3%] sm:top-[13.9%] w-[80%] right-[100%]"}>
                                <li className='text-[20px] font-rajdhani font-[500] p-[15px_0px]' onClick={() => setOpen(!isOpen)}><Link to="/">Home</Link></li>
                                <li className='text-[20px] font-rajdhani font-[500] p-[15px_0px] border-y' onClick={() => setOpen(!isOpen)}><Link to="/shop">Shop</Link></li>
                                <li className='text-[20px] font-rajdhani font-[500] p-[15px_0px]' onClick={() => setOpen(!isOpen)}><Link to="/men">Men</Link></li>
                                <li className='text-[20px] font-rajdhani font-[500] p-[15px_0px] border-y' onClick={() => setOpen(!isOpen)}><Link to="/women">Women</Link></li>
                                <li className='text-[20px] font-rajdhani font-[500] p-[15px_0px]' onClick={() => setOpen(!isOpen)}><Link to="/blog"><span className='text-red-500'>Blog</span></Link></li>
                                <li className='text-[20px] font-rajdhani font-[500] p-[15px_0px] border-y' onClick={() => setOpen(!isOpen)}><Link to="/accessories">Accessories</Link></li>
                                <li className='text-[20px] font-rajdhani font-[500] p-[15px_0px]' onClick={() => setOpen(!isOpen)}><Link to="/faq">FAQ!</Link></li>
                                <li className='text-[20px] font-rajdhani font-[500] '><Link to="loginSignup">Create Account!</Link></li>
                            </ul>
                        <div className="flex md:border-2 rounded-full transition-all hover:shadow-lg">
                            <div className="flex w-10 items-center justify-center rounded-full border-gray-200 bg-white p-0 md:p-5">
                                <RxMagnifyingGlass className=" pointer-events-none absolute w-6 md:w-5 fill-gray-500 transition h-10" />
                            </div>
                            <input type="text" className="w-full max-w-[200px] bg-white pl-2 text-base font-semibold outline-0 rounded-full hidden md:block" placeholder="Search..." id="" />
                        </div>
                    </div>

                    <Link to="/" className='logo my-2'>
                        <img src={logo} alt="LOGO" className='h-8 md:h-14' />
                    </Link>

                    <div className='flex items-center gap-1 md:gap-4'>
                        {
                            isAuthenticated ? (
                                <div className='flex items-center justify-center'>
                                    {/* <img src={user.picture} alt={user.name} className='w-5 h-5'/> */}
                                    {/* <h2>{user.name}</h2> */}
                                    {/* <p className='pr-2'>{user.email}</p> */}
                                    <Profile isAuthenticated={isAuthenticated}/>
                                    <BiLogOutCircle className='text-2xl sm:text-3xl' onClick={() => logout({ returnTo: window.location.origin })} />
                                </div>
                            ) : (
                                <BiLogInCircle className='text-2xl sm:text-3xl' onClick={() => loginWithRedirect()} />
                            )
                        }

                        <Link to="/cart" className=' hidden sm:block'>
                            <Badge badgeContent={items.length} color="primary">
                                <TbShoppingBag className='text-3xl' />
                            </Badge>
                        </Link>

                        <Link href="mailto:mmgurjar9514@gmail.com?subject=Subject&body=Body">
                            <FiMail className='text-3xl hidden sm:block' />
                        </Link>
                    </div>

                </div >
            </nav >
            <nav className='nav2 w-full px-[5rem] lg:px-[13rem] transition-all bg-white'>
                <ul className='hidden py-[5px] md:flex md:items-center md:justify-center space-x-16 duration-150 font-roboslab font-medium text-gray-700 text-[16px] '>
                    <li className='hover:underline'><Link to="/">Home</Link></li>
                    <li className='hover:underline'><Link to="/shop">Shop</Link></li>
                    <li className='hover:underline'><Link to="/men">Men</Link></li>
                    <li className='hover:underline'><Link to="/women">Women</Link></li>
                    <li className='hover:underline'><Link to="/blog"><span className='text-red-500'>Blog</span></Link></li>
                    <li className='hover:underline'><Link to="/accessories">Accessories</Link></li>
                    <li className='hover:underline'><Link to="/faq">FAQ!</Link></li>
                </ul>
            </nav>
        </div >
    )
}

export default Navbar2;
