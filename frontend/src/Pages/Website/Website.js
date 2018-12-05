import React, { Component }  from 'react'
import Navbar from '../../components/Navbar/Navbar';
import Expertise from '../../components/Expertise/Expertise'
import Secteurs from '../../components/Secteurs/Secteurs'
import Technologie from '../../components/Technologie/Technologie'
import Realisations from '../../components/Realisations/Realisations'
import Partenaires from '../../components/Partenaires/Partenaires'
import Contact from '../../components/Contact/Contact'

const Website = () => (
      <div>
        <Navbar/>
        <Expertise/>
        <Technologie/>
        <Secteurs/>
        <Realisations/>
        <Partenaires/>
        <Contact/>
      </div>
    )
export default Website;




