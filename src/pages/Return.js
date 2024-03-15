import React, { useState } from 'react';

import MiniCards from '../components/MiniCards/MiniCards';

function Return() {
    const [orderNumber, setOrderNumber] = useState('');
    const [contactInfo, setContactInfo] = useState('');

    const sendMail = () => {
        console.log('Submitted OrderNo.:', orderNumber);
        console.log('Submitted Email:', contactInfo);
    };

    const handleOrderNumberChange = (e) => {
        setOrderNumber(e.target.value);
    };

    const handleContactInfoChange = (e) => {
        setContactInfo(e.target.value);
    };

    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 pt-10 pb-3 mx-auto">
                    <div className="flex flex-col text-center w-full mb-12">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Product Return Request!</h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Enter your order number and Email or Phone to find your order</p>
                    </div>

                    <div className="flex lg:w-2/5 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end mb-5">
                        <div className="relative flex-grow w-full">
                            <input onChange={handleOrderNumberChange} type="text" id="full-name" name="full-name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out placeholder-gray-600 shadow-lg" placeholder='Order Number' />
                        </div>

                        <div className="relative flex-grow w-full">
                            <input onChange={handleContactInfoChange} type="text" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out placeholder-gray-600 shadow-lg" placeholder='Email or Phone' />
                        </div>

                        <button onClick={sendMail} className="text-white bg-gradient-to-r from-[#eb84e9] to-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                            Find
                        </button>
                    </div>
                    <p className="lg:w-1/4 text-center mx-auto leading-relaxed text-base font-barlow text-black">Please upload the product images where the brand tag is clearly visible to avoid any rejection of your return request. <br /> 100 INR logistic charges will be deducted as a part of the refund process.</p>
                </div>
            </section>

            <MiniCards/>
        </div>
    );
}

export default Return;
