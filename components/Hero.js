
import React from 'react'
import Navbar from './Navbar';

export default function Hero() {
  return (
    <section
      className="flex flex-col w-full h-screen sm:justify-center items-center hero"
      // style={{
      //   backgroundImage:
      //     "url(https://preview.cruip.com/switch/dist/images/hero-media-illustration-light.svg)",
      //   backgroundSize: "cover",
      //   backgroundRepeat: "no-repeat",
        // backgroundPosition: "center",
      // }}
    >
      <Navbar />
      <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h1 className="text-5xl font-bold break-all sm:text-6xl text-white">
            Ac mattis
            <span className="">senectus</span>erat pharetra
          </h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12 text-gray-200">
            Dictum aliquam porta in condimentum ac integer
            <br className="hidden md:inline lg:hidden" />
            turpis pulvinar, est scelerisque ligula sem
          </p>
          <div className="flex text-white flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start mt-20">
            <a
              rel="noopener noreferrer"
              href="#"
              className="px-8 py-3 text-lg font-semibold rounded "
            >
              Suspendisse
            </a>
            <a
              rel="noopener noreferrer"
              href="#"
              className="px-8 py-3 text-lg font-semibold border rounded "
            >
              Malesuada
            </a>
          </div>
        </div>
        {/* <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <img
            src="https://preview.cruip.com/switch/dist/images/hero-media-illustration-light.svg"
            alt=""
            className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
          />
        </div> */}
      </div>
    </section>
  );
}
