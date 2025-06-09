import Header from '@/components/common/header/Header'
import React from 'react'
import FaqBanner from './faqComponents/FaqBanner'
import FaqSection from './faqComponents/FaqSection'
import Footer from '@/components/common/footer/Footer'

const Faq = () => {
  return (
    <div className="w-full">
      <Header />
      <FaqBanner />
      <FaqSection/>
      <Footer/>
    </div>
  )
}

export default Faq