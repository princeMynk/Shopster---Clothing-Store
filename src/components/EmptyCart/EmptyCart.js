import React from 'react'
import { Link } from 'react-router-dom';
import { BiSolidShoppingBags } from "react-icons/bi";
import image from "./5d35e39988e3a183bdc3a9d2570d20a9.gif"
import "./Style.css"

function EmptyCart() {
    return (
        <div className='flex flex-col items-center justify-center'>
            <img src={image} alt="Empty Cart" className='w-96' />

            <div className='flex flex-col items-center justify-center'>
                <h1 className="font-medium text-2xl">
                    Your cart is empty
                </h1>
                <h2 className='font-semibold'>
                    Please add some products to your shopping cart before proceeding with checkout
                </h2>
            </div>

            <Link to="/">
                <div className="button mt-10">
                    <div className="button-wrapper">
                        <div className="text">Buy Now</div>
                        <span className="icon">
                            <BiSolidShoppingBags />
                        </span>
                    </div>
                </div>
            </Link>

        </div>
    )
}

export default EmptyCart
