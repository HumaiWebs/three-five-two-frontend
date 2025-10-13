'use client'
import { useRouter } from 'next/navigation'
import React from 'react'
import { PiArrowLeft } from 'react-icons/pi';

const Backbutton = () => {
    const router = useRouter();
    
    const handleBack = () => {
        router.back();
    }

  return (
    <button onClick={handleBack} className="flex items-center space-x-2">
      <PiArrowLeft className="w-4 h-4" />
      <span>Back</span>
    </button>
  )
}

export default Backbutton