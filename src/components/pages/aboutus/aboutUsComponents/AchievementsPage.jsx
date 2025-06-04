'use client'

import React from 'react'
import Image from 'next/image'

import one from '../../../assets/3.png'
import two from '../../../assets/ftc-badge-circle-black (1).png'
import three from '../../../assets/2020-sfbj-business-of-the-year-award-badge-award.png'
import four from '../../../assets/2024-stevie-winner-silver.png'
import five from '../../../assets/2.png'
import six from '../../../assets/3.png' // reused same image as placeholder

const AchievementsPage = () => {
  const achievements = [one, two, three, four, five, six]

  return (
    <div className="bg-[#EAEAEA] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-12">
          Achievements & Recognitions
        </h2>

        {/* Logo Row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 items-center justify-center">
          {achievements.map((logo, idx) => (
            <div key={idx} className="flex items-center justify-center">
              <Image
                src={logo}
                alt={`Achievement ${idx + 1}`}
                className="object-contain"
                width={120}
                height={120}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AchievementsPage
