import React from 'react'
import TeamBanner from './teamComponents/TeamBanner'
import Header from '@/components/common/header/Header'
import TeamMembers from './teamComponents/TeamMembers'
import Footer from '@/components/common/footer/Footer'

const Team = () => {
  return (
<>
<Header/>
<TeamBanner/>
<TeamMembers/>
<Footer/>
</>
  )
}

export default Team