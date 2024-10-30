'use client'
import React from 'react'
import dynamic from "next/dynamic";

const LuckyWheel = dynamic(() => import("@/components/LuckyWheel"), { ssr: false })

const Home = () => {
  return (
    <div>
      <LuckyWheel />
    </div>
  )
}

export default Home