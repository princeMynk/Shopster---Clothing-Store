import React from "react";
import { Link } from "react-router-dom";

function Featured() {
    return (
        <div>
            <section>
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
                        <div className="grid place-content-center rounded bg-gray-100 p-6 sm:p-8">
                            <div className="mx-auto max-w-md text-center lg:text-left">
                                <header>
                                    <h2 className="text-xl font-bold text-gray-900 sm:text-3xl font-cinzel">
                                        Watches
                                    </h2>
                                    <blockquote className="my-3 font-cinzel font-semibold">
                                        "Everyone looks at your watch and it represents who you are, your values and your personal style."
                                    </blockquote>
                                    <figcaption className="text-sm">
                                        &mdash; <span className="underline font-medium font-nunitoSans">Kobe Bryant,</span> <cite>An American Professional Basketball Player.</cite>
                                    </figcaption>
                                </header>

                                <Link to="/watch" className="mt-8 inline-block rounded border border-gray-900 bg-gray-900 px-12 py-3 text-sm font-medium text-white transition hover:shadow focus:outline-none focus:ring">
                                    Shop All
                                </Link>
                            </div>
                        </div>

                        <div className="lg:col-span-2 lg:py-8">
                            <ul className="grid grid-cols-2 gap-4">
                                <li>
                                    <Link to="/watch" className="group block">
                                        <img src="https://i.postimg.cc/brdbgHBh/w-1.jpg" alt="Watch img" className="aspect-square w-full rounded object-cover"/>

                                        <div className="mt-3">
                                            <h3 className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4">
                                                Simple Watch
                                            </h3>

                                            <p className="mt-1 text-sm text-gray-700">$150</p>
                                        </div>
                                    </Link>
                                </li>

                                <li>
                                    <Link to="/watch" className="group block">
                                        <img src="https://i.postimg.cc/sXT750Km/w-2.jpg" alt="Watch img" className="aspect-square w-full rounded object-cover" />

                                        <div className="mt-3">
                                            <h3 className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4">
                                                Simple Watch
                                            </h3>

                                            <p className="mt-1 text-sm text-gray-700">$150</p>
                                        </div>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Featured;
