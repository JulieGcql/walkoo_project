import React, {Component} from 'react'
import Navbar from '../../components/Navbar/Navbar';
import Expertise from '../../components/Expertise/Expertise'
import Technologie from '../../components/Technologie/Technologie'
import Secteurs from '../../components/Secteurs/Secteurs';
import Partenaires from '../../components/Partenaires/Partenaires';

const Website = () => (
  <div>
    <Navbar />
    <Expertise/>
    <Technologie/>
    <Secteurs/>
    <Partenaires/>
  </div>
)

export default Website;
