import React from 'react'

function Hero() {
    return (
        <div className="carousel w-full transition-all">
            <div id="slide1" className="carousel-item relative w-full">
                <img src="https://i.postimg.cc/Hx9PmYxP/2.png" className="w-full" alt=''/>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 duration-500 ease-in-out">
                    <p href="#slide7" className="btn btn-circle ">❮</p>
                    <p href="#slide2" className="btn btn-circle ">❯</p>
                </div>
            </div>
            {/* <div id="slide2" className="carousel-item relative w-full">
                <img src="https://i.postimg.cc/C1Smm3NC/7.png" className="w-full" alt=''/>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 duration-500 ease-in-out">
                    <p href="#slide1" className="btn btn-circle">❮</p>
                    <p href="#slide3" className="btn btn-circle">❯</p>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src="https://i.postimg.cc/T2QHH3BK/3.png" className="w-full" alt=''/>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 duration-500 ease-in-out">
                    <p href="#slide2" className="btn btn-circle">❮</p>
                    <p href="#slide4" className="btn btn-circle">❯</p>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src="https://i.postimg.cc/Wb3fRPPX/4.png" className="w-full" alt=''/>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 duration-500 ease-in-out">
                    <p href="#slide3" className="btn btn-circle">❮</p>
                    <p href="#slide5" className="btn btn-circle">❯</p>
                </div>
            </div>
            <div id="slide5" className="carousel-item relative w-full">
                <img src="https://i.postimg.cc/jjV8JwnF/5.png" className="w-full" alt=''/>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 duration-500 ease-in-out">
                    <p href="#slide4" className="btn btn-circle">❮</p>
                    <p href="#slide6" className="btn btn-circle">❯</p>
                </div>
            </div>
            <div id="slide6" className="carousel-item relative w-full">
                <img src="https://i.postimg.cc/Jhbp3rb4/6.png" className="w-full" alt=''/>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 duration-500 ease-in-out">
                    <p href="#slide5" className="btn btn-circle">❮</p>
                    <p href="#slide7" className="btn btn-circle">❯</p>
                </div>
            </div>
            <div id="slide7" className="carousel-item relative w-full">
                <img src="https://i.postimg.cc/sDDbVh5P/1.png" className="w-full" alt=''/>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 duration-500 ease-in-out">
                    <p href="#slide6" className="btn btn-circle">❮</p>
                    <p href="#slide1" className="btn btn-circle">❯</p>
                </div>
            </div> */}
        </div>
    )
}

export default Hero;
