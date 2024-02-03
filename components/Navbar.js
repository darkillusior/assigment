"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
const Navbar = ({ project, team }) => {
  const [showMenu, setShowMenu] = useState(false);
  const handleToggle = () => {
    setShowMenu(!showMenu);
  };
  const textToShare = "Hi, Chill Devs! We have some work for you";
  return (
    <>
      <div className="sm:flex items-center w-full justify-between sm:px-8 md:px-12 lg:px-24 pt-6 hidden">
        <Link
          href={"/"}
          className="text-[#000000] font-Satoshi tracking-wider font-bold text-2xl"
        >
          <strong className="text-purple-600">S</strong>tartUp
        </Link>

        <div className="flex items-center sm:gap-7 lg:gap-12">
          <a
            href="#work"
            className="text-[#373d51] font-Satoshi text-lg font-medium tracking-wide dropdown-item"
          >
            How it Works
          </a>
          <a
            href="#pricing"
            className="text-[#374151] font-Satoshi text-lg font-medium tracking-wide dropdown-item"
          >
            Pricing
          </a>
          <Link
            href="/projects"
            className="text-[#374151] font-Satoshi text-lg font-medium tracking-wide dropdown-item"
          >
            Projects
          </Link>
          <Link
            href="/team"
            className="text-[#374151] font-Satoshi text-lg font-medium tracking-wide dropdown-item"
          >
            Team
          </Link>
          <a href="#contact">
            <button className="flex items-center justify-center py-2.5 px-6 md:py-3 md:px-8  border border-[#ba46dd] rounded-lg shadow-lg font-Satoshi text-lg font-bold tracking-wide text-[#ba46dd] hover:bg-[#ba46dd] hover:text-white transition-colors ease-in-out duration-300">
              Log in
            </button>
          </a>
        </div>
      </div>
      {/* mobile version */}
      <div className="flex items-center justify-between px-8 pt-4 sm:hidden pb-5">
        <Link
          href={"/"}
          className="text-[#000000] font-Satoshi tracking-wider font-bold text-2xl"
        >
          <strong className="text-purple-600">S</strong>tartUp
        </Link>
        <Image
          src="./menu.svg"
          alt="menubar"
          className="w-7 h-7 relative z-20 cursor-pointer transform hover:scale-110 transition-transform duration-100"
          onClick={handleToggle}
          width={200}
          height={200}
        />
        {showMenu && (
          <div className="absolute inset-0 h-screen bg-white pt-20 transition-all duration-500 z-10">
            {!project && !team ? (
              <div className="flex flex-col items-center  gap-7">
                <a
                  href="#work"
                  className="text-[#374151] font-Satoshi text-lg font-medium tracking-wide dropdown-item"
                  onClick={() => setShowMenu(!showMenu)}
                >
                  How it Works
                </a>
                <a
                  href="#pricing"
                  className="text-[#374151] font-Satoshi text-lg font-medium tracking-wide dropdown-item"
                  onClick={() => setShowMenu(!showMenu)}
                >
                  Pricing
                </a>
                <Link
                  href="/projects"
                  className="text-[#374151] font-Satoshi text-lg font-medium tracking-wide dropdown-item"
                  onClick={() => setShowMenu(!showMenu)}
                >
                  Projects
                </Link>
                <Link
                  href="/team"
                  className="text-[#374151] font-Satoshi text-lg font-medium tracking-wide dropdown-item"
                  onClick={() => setShowMenu(!showMenu)}
                >
                  Team
                </Link>
                <a href="#contact" onClick={() => setShowMenu(!showMenu)}>
                  <button className="flex items-center justify-center py-2.5 px-6 md:py-3 md:px-8  border border-[#4B5563] rounded-lg shadow-lg font-Satoshi text-lg font-bold tracking-wide text-[#4B5563] hover:bg-[#4B5563] hover:text-white transition-colors ease-in-out duration-1000">
                    Contact us
                  </button>
                </a>
              </div>
            ) : (
              <div className="flex flex-col items-center  gap-7">
                <Link
                  href="/projects"
                  className="text-[#374151] font-Satoshi text-lg font-medium tracking-wide dropdown-item"
                  onClick={() => setShowMenu(!showMenu)}
                >
                  Projects
                </Link>
                <Link
                  href="/team"
                  className="text-[#374151] font-Satoshi text-lg font-medium tracking-wide dropdown-item"
                  onClick={() => setShowMenu(!showMenu)}
                >
                  Team
                </Link>
                <a
                  href={`https://wa.me/7906251317?text=${textToShare}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setShowMenu(!showMenu)}
                >
                  <button className="flex items-center gap-4 justify-center w-44 h-12 bg-[#4B5563] fill-white hover:fill-[#4B5563] rounded-lg shadow-lg font-Satoshi text-base font-bold tracking-wide text-[#F9FAFB] hover:bg-[#F9FAFB] hover:border border-[#4B5563]  hover:text-[#4B5563] transition-colors ease-in-out duration-300">
                    <span> Contact us</span>
                    <svg
                      width="800px"
                      height="800px"
                      viewBox="0 0 24 24"
                      fill="current"
                      stroke="current"
                      strokeWidth="1.344"
                      className="w-5 h-5"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth="0" />

                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />

                      <g id="SVGRepo_iconCarrier">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M3.50002 12C3.50002 7.30558 7.3056 3.5 12 3.5C16.6944 3.5 20.5 7.30558 20.5 12C20.5 16.6944 16.6944 20.5 12 20.5C10.3278 20.5 8.77127 20.0182 7.45798 19.1861C7.21357 19.0313 6.91408 18.9899 6.63684 19.0726L3.75769 19.9319L4.84173 17.3953C4.96986 17.0955 4.94379 16.7521 4.77187 16.4751C3.9657 15.176 3.50002 13.6439 3.50002 12ZM12 1.5C6.20103 1.5 1.50002 6.20101 1.50002 12C1.50002 13.8381 1.97316 15.5683 2.80465 17.0727L1.08047 21.107C0.928048 21.4637 0.99561 21.8763 1.25382 22.1657C1.51203 22.4552 1.91432 22.5692 2.28599 22.4582L6.78541 21.1155C8.32245 21.9965 10.1037 22.5 12 22.5C17.799 22.5 22.5 17.799 22.5 12C22.5 6.20101 17.799 1.5 12 1.5ZM14.2925 14.1824L12.9783 15.1081C12.3628 14.7575 11.6823 14.2681 10.9997 13.5855C10.2901 12.8759 9.76402 12.1433 9.37612 11.4713L10.2113 10.7624C10.5697 10.4582 10.6678 9.94533 10.447 9.53028L9.38284 7.53028C9.23954 7.26097 8.98116 7.0718 8.68115 7.01654C8.38113 6.96129 8.07231 7.046 7.84247 7.24659L7.52696 7.52195C6.76823 8.18414 6.3195 9.2723 6.69141 10.3741C7.07698 11.5163 7.89983 13.314 9.58552 14.9997C11.3991 16.8133 13.2413 17.5275 14.3186 17.8049C15.1866 18.0283 16.008 17.7288 16.5868 17.2572L17.1783 16.7752C17.4313 16.5691 17.5678 16.2524 17.544 15.9269C17.5201 15.6014 17.3389 15.308 17.0585 15.1409L15.3802 14.1409C15.0412 13.939 14.6152 13.9552 14.2925 14.1824Z"
                          fill="current"
                        />
                      </g>
                    </svg>
                  </button>
                </a>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
