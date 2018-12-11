import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import Expertise from '../../components/Expertise/Expertise'
import Secteurs from '../../components/Secteurs/Secteurs'
import Technologie from '../../components/Technologie/Technologie'
import Realisations from '../../components/Realisations/Realisations'
import Partenaires from '../../components/Partenaires/Partenaires'
import Contact from '../../components/Contact/Contact'
import Footer from '../../components/Footer/Footer'

const Website = () => (
  <div>
    <Navbar/>
    <Expertise/>
    <Technologie/>
    <Secteurs/>
    <Realisations/>
    <Partenaires/>
    <Contact/>
    <Footer/>
  </div>
)
export default Website;




