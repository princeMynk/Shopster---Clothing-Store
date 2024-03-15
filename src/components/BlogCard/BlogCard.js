import React from 'react'

function BlogCard() {

    return (
        <div>
            <div className="mx-auto container flex justify-center items-center py-12 px-4 sm:px-6 2xl:px-0">
                <div className="flex flex-col lg:flex-row justify-center items-center space-y-6 lg:space-y-0">
                    <div className="w-80 sm:w-auto flex flex-col sm:justify-start justify-center sm:items-start items-center">
                        <div>
                            <p className="text-3xl xl:text-4xl font-semibold leading-9 text-gray-800">Style your-self</p>
                        </div>
                        <div className="mt-4 lg:w-4/5 xl:w-3/5 ">
                            <p className="text-base text-center sm:text-start leading-6 text-gray-600">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                        </div>
                        <div className="mt-16 w-full">
                            <button className="px-4 bg-gray-900 flex justify-between items-center w-full lg:w-72 h-14 text-white hover:bg-gray-700">
                                <p className="text-xl font-medium leading-5">See More</p>
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.66663 16H25.3333" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M20 21.3333L25.3333 16" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M20 10.6667L25.3333 16" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row justify-center items-center sm:space-x-5 md:space-x-3 xl:space-x-8 space-y-4 sm:space-y-0 px-3 sm:px-0">
                        <div>
                            <img className="w-80 md:w-[14rem] hidden sm:block" src="https://i.postimg.cc/dQ4f3H9W/1.jpg" alt="Male Img" />
                            <img className="w-80 sm:w-auto sm:hidden" src="https://i.postimg.cc/TYnk8TPW/2.jpg" alt="Male Img" />
                        </div>
                        <div className="flex flex-col justify-center items-center space-y-4 sm:space-y-5 md:space-y-3 lg:space-y-5 xl:space-y-8">
                            <div>
                                <img className="w-[17rem] hidden lg:block" src="https://i.postimg.cc/BQndC969/3.jpg" alt="Female Img" />
                                <img className="w-80 sm:w-[22rem] md:w-60 lg:hidden" src="https://i.postimg.cc/YCJZkvxM/4.jpg" alt="Female Img" />
                            </div>
                            <div>
                                <img className="w-[17rem] hidden lg:block" src="https://i.postimg.cc/8cKXYc58/5.jpg" alt="Couple Img" />
                                <img className="w-80 sm:w-[22rem] md:w-60 lg:hidden" src="https://i.postimg.cc/RVtYMcgh/6.jpg" alt="Couple Img" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogCard
