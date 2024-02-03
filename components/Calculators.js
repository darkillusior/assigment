import React from 'react'
import Calculator from './Calculator'

export default function Calculators() {
  return (
    <div className="flex flex-col w-full px-4 items-center gap-10 justify-center py-20 sm:gap-20">
      <h1 className="text-5xl font-bold leadi sm:text-6xl text-gray-700">Calculators</h1>
      <div className="flex flex-wrap w-full gap-4 items-center justify-center">
        <Calculator />
        <Calculator />
        <Calculator />
        
      </div>
    </div>
  );
}
