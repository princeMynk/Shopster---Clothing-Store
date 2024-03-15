import React from 'react'

import MiniCards from '../components/MiniCards/MiniCards'
import Address from '../components/Address/Address'

function FraudProtection() {
    return (
        <div>
            <section class="">
                <div class="container lg:px-60 pt-24 pb-10 mx-auto">
                    <div class="flex flex-wrap -mx-4 -my-8">

                        <div class="py-8 px-4 lg:w-full">
                            <div class="h-full flex items-start">
                                <div class="flex-grow pl-6 font-roboslab">
                                    <h2 class="tracking-widest title-font font-medium text-black mb-5">Keep track of your Order ID.</h2>

                                    <p class="leading-relaxed text-black mb-5">The Order ID appears in all communications regarding your order from the confirmation stage to dispatch.</p>

                                    <p class="leading-relaxed text-black mb-5">When making a cash on delivery payment, please confirm that the Order ID you have matches that of the delivery agent’s.</p>

                                    <p class="leading-relaxed text-black mb-5">Never pay the delivery agent or any courier business in cash or by any online method for prepaid orders.</p>

                                    <p class="leading-relaxed text-black mb-5">Never share your Delivery OTP to a delivery agent over the phone.</p>

                                    <p class="leading-relaxed text-black mb-5">Share the Delivery Cancellation OTP with the delivery agent only if you wish to cancel the order.</p>

                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </section>

            <Address/>

            <MiniCards />
        </div>
    )
}

export default FraudProtection
