import React from 'react'
import SecteursMobile from './SecteursMobile';
import SecteursPc from './SecteursPc';
import Media from 'react-media'

const Secteurs  = () => (
  <div>
    <Media query="(max-width: 425px)">
      {matches =>
        matches ? (
          <SecteursMobile/>
        ) : (
          <SecteursPc/>
        )
      }
    </Media>
  </div>
)

export default Secteurs;