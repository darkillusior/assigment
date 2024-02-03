import React, { useState, useEffect } from "react";
import { Line, Circle } from "rc-progress";
import Image from "next/image";
export default function CalBox() {
  const [mInvesment, setmInvesment] = useState(10000);
  const [returnRate, setReturnRate] = useState(10);
  const [timePeriod, setTimePeriod] = useState(10);

  const [totalInvestment, setTotalInvestment] = useState(0);
  const [estimatedReturns, setEstimatedReturns] = useState(0);
  const [totalValue, setTotalValue] = useState(0);

  useEffect(() => {
    // Convert return rate to monthly interest rate
    const monthlyInterestRate = returnRate / 100 / 12;
    // Calculate the number of months
    const numberOfMonths = timePeriod * 12;
    // Calculate SIP
    const sip =
      mInvesment *
      ((Math.pow(1 + monthlyInterestRate, numberOfMonths) - 1) /
        monthlyInterestRate);

    // Update the state
    setTotalInvestment(mInvesment * numberOfMonths);
    setEstimatedReturns(sip - mInvesment * numberOfMonths);
    setTotalValue(sip);
  }, [mInvesment, returnRate, timePeriod]);

  const handleReturnRateChange = (e) => {
    setReturnRate(e.target.value); // Update the state with the parsed value
  };
  return (
    <div className="mt-1 sm:mt-10 px-2 sm:px-6 md:px-20 mb-10 bg-[#e7cff1] z-0 relative">
      <div className="absolute h-1/3 sm:h-1/2 w-full left-0 cal z-10">
        <Image
          src={"/vec1.webp"}
          alt="img"
          width={2000}
          height={2000}
          className="w-full h-1/3 sm:h-1/2 left-0 absolute"
        />
      </div>
      <div>
        <h1 className="font-Satoshi tracking-wider font-bold text-2xl text-gray-300">
          SIP Calculator
        </h1>
      </div>
      <div className=" rounded-xl px-4 md:px-10 py-20 w-full border-2 border-gray-200 mt-10 flex flex-col gap-32 bg-white z-10 relative">
        <div className=" flex md:flex-row flex-col md:gap-0 gap-20 justify-between">
          <div className="flex flex-col gap-20  md:w-1/2">
            <div className="flex flex-col items-start gap-10">
              <div className="flex items-center justify-between w-full">
                <label className="font-Satoshi tracking-wider font-semibold text-base text-gray-600">
                  Monthely Investment
                </label>
                <div className="relative">
                  <span className="absolute left-0 font-bold text-blue-700">
                    ₹
                  </span>
                  <input
                    type="number"
                    value={mInvesment}
                    max="1000000"
                    min={-Infinity}
                    onChange={(e) => setmInvesment(e.target.value)}
                    className="bg-gray-200 w-24 pl-4 rounded-md font-bold text-blue-700 outline-none"
                  />
                </div>
              </div>
              <input
                type="range"
                max="1000000"
                min={-Infinity}
                value={mInvesment}
                className="w-full h-2"
                onChange={(e) => setmInvesment(e.target.value)}
              />
            </div>
            <div className="flex flex-col items-start gap-10">
              <div className="flex items-center justify-between w-full">
                <label className="font-Satoshi tracking-wider font-semibold text-base text-gray-600">
                  {" "}
                  Expected return rate (p.a)
                </label>
                <div className="relative">
                  <input
                    type="number"
                    value={returnRate}
                    max="30"
                    min={-Infinity}
                    onChange={(e) => setReturnRate(e.target.value)}
                    className="bg-gray-200 w-14 pl-2 rounded-md font-bold text-blue-700 outline-none"
                  />
                  <span className="absolute right-[16%] font-bold text-blue-700 ">
                    %
                  </span>
                </div>
              </div>
              <input
                value={returnRate}
                type="range"
                max="30"
                min={-Infinity}
                className="w-full h-2"
                onChange={(e) => setReturnRate(e.target.value)}
              />
            </div>
            <div className="flex flex-col items-start gap-10">
              <div className="flex items-center justify-between w-full">
                <label className="font-Satoshi tracking-wider font-semibold text-base text-gray-600">
                  Time period
                </label>
                <div className="relative">
                  <input
                    type="number"
                    value={timePeriod}
                    min={0}
                    max={40}
                    onChange={(e) => setTimePeriod(e.target.value)}
                    className="bg-gray-200 w-14 pl-2 rounded-md font-bold text-blue-700 outline-none"
                  />
                  <span className="absolute right-[16%] font-bold text-blue-700 ">
                    Yr
                  </span>
                </div>
              </div>
              <input
                type="range"
                value={timePeriod}
                className="w-full h-2"
                min={0}
                max={40}
                onChange={(e) => setTimePeriod(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-between sm:gap-0 gap-20 border border-gray-200 shadow py-6">
            <div className="flex items-center justify-center gap-10">
              {/* <div className="flex md:flex-row flex-col md:items-center gap-56"> */}
              <div className="flex flex-col gap-5 w-32">
                <div className="w-full flex flex-col  justify-between">
                  <div className="flex items-center gap-1 w-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      class="w-4 h-4"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                      ></path>
                    </svg>
                    <span className="text-gray-700 font-normal text-sm">
                      Invested amount
                    </span>
                  </div>
                  <span className="text-gray-800 font-bold text-lg">
                    ₹{totalInvestment.toFixed(2)}
                  </span>
                </div>
                <div className="w-full flex flex-col  justify-between">
                     <div className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      class="w-4 h-4"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                      ></path>
                    </svg>
                  <span className="text-gray-700 font-normal text-sm">
                    Est returns
                  </span>
                  </div>
                  <span className="text-gray-800 font-bold text-lg">
                    ₹{estimatedReturns.toFixed(2)}
                  </span>
                </div>
                <div className="w-full flex flex-col  justify-between">
                     <div className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      class="w-4 h-4"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                      ></path>
                    </svg>
                  <span className="text-gray-700 font-normal text-sm">
                    Total value
                  </span>
                  </div>
                  <span className="text-gray-800 font-bold text-lg">
                    ₹{totalValue.toFixed(2)}
                  </span>
                </div>
              </div>

              {/* </div> */}
              <Circle
                percent={(totalValue / totalInvestment) * 100}
                strokeWidth={20}
                strokeColor="#ba46dd"
                className="w-1/2"
                trailWidth={20}
                trailColor="#dee3ed"
                strokeLinecap="butt"
              />
            </div>
            <div>
              <button className="flex items-center justify-center py-2.5 px-6 md:py-3 md:px-8  border border-[#ba46dd] rounded-lg shadow-lg font-Satoshi text-lg font-bold tracking-wide text-[#ba46dd] hover:bg-[#ba46dd] hover:text-white transition-colors ease-in-out duration-300">
                Invest Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
