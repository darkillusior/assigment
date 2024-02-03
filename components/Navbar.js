import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
const Navbar = ({ black }) => {
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
          className={
            !black
              ? `text-white font-Satoshi tracking-wider font-bold text-2xl`
              : `text-black font-Satoshi tracking-wider font-bold text-2xl` 
          }
        >
          <strong className="text-purple-600">S</strong>tartUp
        </Link>

        <div className="flex items-center sm:gap-7 lg:gap-12">
          <a
            href="#work"
            className="text-white font-Satoshi text-lg font-medium tracking-wide dropdown-item"
          >
            How it Works
          </a>
          <a
            href="#pricing"
            className="text-white font-Satoshi text-lg font-medium tracking-wide dropdown-item"
          >
            Pricing
          </a>
          <Link
            href="/projects"
            className="text-white font-Satoshi text-lg font-medium tracking-wide dropdown-item"
          >
            Projects
          </Link>
          <Link
            href="/team"
            className="text-white font-Satoshi text-lg font-medium tracking-wide dropdown-item"
          >
            Team
          </Link>
          <a href="#contact">
            <button
              className={
                !black
                  ? ` flex items-center justify-center py-2.5 px-6 md:py-3 md:px-8   rounded-lg shadow-lg font-Satoshi text-lg font-bold tracking-wide text-white hover:bg-[#ba46dd] hover:text-white transition-colors ease-in-out duration-300`
                  : ` border border-[#ba46dd] flex items-center justify-center py-2.5 px-6 md:py-3 md:px-8   rounded-lg shadow-lg font-Satoshi text-lg font-bold tracking-wide text-[#ba46dd] hover:bg-[#ba46dd] hover:text-white transition-colors ease-in-out duration-300`
              }
            >
              Log in
            </button>
          </a>
        </div>
      </div>
      {/* mobile version */}
      <div className="flex items-center justify-between px-8 pt-4 sm:hidden pb-5 w-full">
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
                  className="text-white font-Satoshi text-lg font-medium tracking-wide dropdown-item"
                  onClick={() => setShowMenu(!showMenu)}
                >
                  How it Works
                </a>
                <a
                  href="#pricing"
                  className="text-white font-Satoshi text-lg font-medium tracking-wide dropdown-item"
                  onClick={() => setShowMenu(!showMenu)}
                >
                  Pricing
                </a>
                <Link
                  href="/projects"
                  className="text-white font-Satoshi text-lg font-medium tracking-wide dropdown-item"
                  onClick={() => setShowMenu(!showMenu)}
                >
                  Projects
                </Link>
                <Link
                  href="/team"
                  className="text-white font-Satoshi text-lg font-medium tracking-wide dropdown-item"
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
                  className="text-white font-Satoshi text-lg font-medium tracking-wide dropdown-item"
                  onClick={() => setShowMenu(!showMenu)}
                >
                  Projects
                </Link>
                <Link
                  href="/team"
                  className="text-white font-Satoshi text-lg font-medium tracking-wide dropdown-item"
                  onClick={() => setShowMenu(!showMenu)}
                >
                  Team
                </Link>
            
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
