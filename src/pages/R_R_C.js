import React from 'react'
import Address from '../components/Address/Address'
import MiniCards from '../components/MiniCards/MiniCards'
import { Link } from 'react-router-dom'

function R_R_C() {
    return (
        <div>
            <section class="font-roboslab text-black">
                <div class="container lg:px-32 pt-24 pb-10 mx-auto">

                    <div class="flex flex-wrap -mx-4 -my-8">
                        <div class="py-8 px-4 lg:w-full">
                            <div class="h-full flex items-start">
                                <div class="flex-grow pl-6">
                                    <h2 class="text-md font-semibold mb-5">Important Update : Starting January 1st 2024 12:00 IST, we're updating our shipping policy. Exchanges will be discontinued; however, you can initiate a return and place a new order if needed.</h2>
                                    <p class="leading-relaxed mb-20">(All exchange requests made before or on December 31st will be addressed.)</p>

                                    <h2 class="text-md font-medium  mb-4 underline">PRODUCT DISCLAIMER</h2>
                                    <ul>
                                        <li class="leading-relaxed list-square mb-10">All images on the website are enhanced during the post-production process, actual product colors may vary. </li>
                                    </ul>


                                    <h2 class="text-md font-medium mb-4 underline">RETURNS</h2>
                                    <p class="leading-relaxed mb-10">All returns must be postmarked within 7 days of the purchase date for Damage and wrong product. All returned items must be new and in an unused condition.</p>

                                    <h2 class=" text-md font-semibold  mb-10">100 INR logistic charges will be deducted as a part of refund process.</h2>

                                    
                                    <h2 class="text-md font-medium  mb-4 underline">RETURN PROCESS</h2>
                                    <ul>
                                        <li class="leading-relaxed list-square mb-3">To return an item, please raise a request at <Link to="/return" className='underline'>http://localhost:3001/return</Link>  with a clear photo or a video that shows the product’s defects. Once the return is approved your order will be picked up within 4 -5 working days. </li>
                                        <li class="leading-relaxed list-square mb-3">The team will work on the refund after the product is received. Refunds take 3-5 business days to appear in your original form of payment.</li>

                                        <li class="leading-relaxed list-square mb-10">In order to be eligible for a refund, your item must be returned with all tags attached, unworn, unused, and unwashed, in the exact condition that you received it</li>
                                    </ul>

                                    <h2 class="text-md font-medium mb-4">CANCELLATIONS</h2>
                                    <p class="leading-relaxed mb-3">Orders can't be cancelled once its shipped, you can cancel the order before it is shipped by visiting the my account page.</p>

                                    <h2 class="text-md font-medium mb-4">EXCHANGES </h2>
                                    <p class="leading-relaxed mb-10"> (exchange policy to be discontinued from 1st January 2024.)</p>

                                    <h2 class="text-md font-medium mb-4">QUESTIONS </h2>
                                    <p class="leading-relaxed mb-3">If you have any questions, please contact us at: <a href="mailto:mmgurjar9514@gmail.com?subject=Subject&body=Body" className='underline'>@Shopster</a></p>

                                    <p class="leading-relaxed mb-3">Shopster will not stand liable for any changes of any damage caused by the customer to the product.</p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Address />
            <MiniCards />
        </div>
    )
}

export default R_R_C
