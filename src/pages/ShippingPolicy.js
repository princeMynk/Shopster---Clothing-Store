import React from 'react'
import Address from '../components/Address/Address'
import MiniCards from '../components/MiniCards/MiniCards'

function ShippingPolicy() {
    return (
        <div>
            <section class="font-roboslab text-black">
                <div class="container lg:px-60 pt-24 pb-10 mx-auto">

                    <div class="flex flex-wrap -mx-4 -my-8">
                        <div class="py-8 px-4 lg:w-full">
                            <div class="h-full flex items-start">
                                <div class="flex-grow pl-6">
                                    <h2 class="tracking-widest text-lg title-font font-medium text-black mb-20 underline">SHIPPING</h2>
                                    
                                    <h2 class="tracking-widest text-md title-font font-medium text-black mb-4 underline">Pre-paid Orders</h2>
                                    <ul>
                                        <li class="leading-relaxed list-square mb-3">We will ship your prepaid order within 48 hours and you will get a tracking link over Email and WhatsApp. </li>
                                        <li class="leading-relaxed list-square mb-3">Free shipping on pre-paid orders. </li>
                                        <li class="leading-relaxed list-square mb-3">Delivery within 7-8 working business days. </li>
                                        <li class="leading-relaxed list-square mb-3">Cost of shipping (i.e 100 INR) will be deducted from the refund amount.  </li>
                                    </ul>


                                    <h2 class="tracking-widest text-md title-font font-medium text-black mb-4 underline">COD Orders </h2>
                                    <ul>
                                        <li class="leading-relaxed list-decimal mb-3">We will ship your COD order within 3-4 working days and you will get a tracking link over Email and WhatsApp.  </li>
                                        <li class="leading-relaxed list-decimal mb-3">Shipping cost 99 INR is added in COD orders only and it will be calculated at the checkout. </li>
                                        <li class="leading-relaxed list-decimal mb-3">Cost of shipping (i.e100 INR) will be deducted from the refund amount.  </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <Address/>

            <MiniCards/>
        </div>
    )
}

export default ShippingPolicy
