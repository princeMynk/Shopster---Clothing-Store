import React from 'react'
import { Link } from 'react-router-dom'

function Featured2() {
    return (
        <div>
            <section>
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                    <header className="text-center">
                        <h2 className="text-xl font-bold font-aboreto text-gray-900 sm:text-3xl">
                            New Collection
                        </h2>

                        {/* <p className="mx-auto mt-4 max-w-md text-gray-500">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque praesentium cumque iure
                            dicta incidunt est ipsam, officia dolor fugit natus?
                        </p> */}
                        <blockquote className="my-3 font-aboreto font-semibold">
                            "What you wear is how you present yourself to the world, especially today, when human contacts are so quick. Fashion is instant language."
                        </blockquote>
                        <figcaption className="text-sm">
                            &mdash; <span className="underline font-medium font-nunitoSans">Miuccia Prada,</span> <cite>An Italian billionaire fashion designer and businesswoman.</cite>  </figcaption>
                    </header>

                    <ul className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-3">
                        <li>
                            <Link to="/shoe" href="#" className="group relative block">
                                <img alt="" className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
                                    src="https://images.unsplash.com/photo-1618898909019-010e4e234c55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"/>
                                <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                                    <h3 className="text-xl font-medium text-white">Casual Trainers</h3>
                                    <button className="mt-1.5 inline-block bg-black hover:bg-gray-900 px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
                                        Shop Now
                                    </button>
                                </div>
                            </Link>
                        </li>

                        <li>
                            <Link to="" href="#" className="group relative block">
                                <img alt="" className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
                                    src="https://images.unsplash.com/photo-1624623278313-a930126a11c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"/>
                                <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                                    <h3 className="text-xl font-medium text-white">Winter Jumpers</h3>
                                    <button className="mt-1.5 inline-block bg-black hover:bg-gray-900 px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
                                        Shop Now
                                    </button>
                                </div>
                            </Link>
                        </li>

                        <li className="lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1">
                            <Link to="/women" className="group relative block">
                                <img alt="" className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
                                    src="https://images.unsplash.com/photo-1593795899768-947c4929449d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80"/>
                                <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                                    <h3 className="text-xl font-medium text-white">Skinny Jeans Blue</h3>
                                    <button className="mt-1.5 inline-block bg-black hover:bg-gray-900 px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
                                        Shop Now
                                    </button>
                                </div>
                            </Link>
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    )
}

export default Featured2
