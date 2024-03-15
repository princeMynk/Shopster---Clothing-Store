import { Rating } from '@mui/material';
import WatchList from "../API/WatchApi"
import React from 'react'
import { useNavigate } from 'react-router-dom'

function Watch() {

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
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-4 gap-5">

                        {WatchList.AllWatchData.map((item) => (
                            <div key={item.id} className="lg:w-[300px] md:w-1/2 p-4 w-full border-2 border-black">
                                <div onClick={() => NavToDetail(item)} className="relative rounded overflow-hidden flex items-center justify-center">
                                    <img alt="e-commerce" className="object-cover w-auto h-auto block aspect-square " src={item.main_img} />
                                </div>
                                <div className="mt-4">
                                    <div className="hidden sm:block">
                                        <Rating name={`rating-${item.id}`} value={item.rating} precision={0.5} readOnly className='block sm:hidden' />
                                    </div>
                                    <h3 className="text-gray-500 text-[10px] sm:text-xs tracking-widest mb-1">{item.brand}</h3>
                                    <h2 title={item.name} className="text-gray-900 text-xs sm:text-sm md:text-base lg:text-md font-medium">{shortenTitle(item.name, 25)}</h2>
                                    {/* <p className="mt-1 text-gray-500 text-sm     font-medium mb-2">Color: {item.color}</p> */}
                                    <p className="mt-1 text-black font-medium mb-2"><span className='line-through mr-2'>{item.old_price}</span><span className='text-red-500 text-sm'>{item.price_off}</span> <br />₹{item.price}</p>
                                    {/* Buy Now button */}
                                    <button className="bg-[#fff] hover:bg-black text-[#000] hover:text-white font-semibold py-1 px-1 sm:py-1 sm:px-3 text-[8px] sm:text-base border-2 border-black " >
                                        Buy Now
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Watch
