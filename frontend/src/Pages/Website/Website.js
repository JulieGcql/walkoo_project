import React, {Component} from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Accueil from '../../components/Accueil/Accueil';
import Expertise from '../../components/Expertise/Expertise';
import Secteurs from '../../components/Secteurs/Secteurs';
import Technologie from '../../components/Technologie/Technologie';
import Realisations from '../../components/Realisations/Realisations';
import MediasSalons from '../../components/MediasSalons/MediasSalons';
import Partenaires from '../../components/Partenaires/Partenaires';
import Contact from '../../components/Contact/Contact';
import Footer from '../../components/Footer/Footer';

import MetaTags from 'react-meta-tags'

export default class Website extends Component {

render() {
    return(
        <div>
            {/*<MetaTags>
                  <title>Page 1</title>
                  <meta name="description" content="Some description." />
                  <meta property="og:title" content="MyApp" />
                  <meta property="og:image" content="path/to/image.jpg" />
              </MetaTags>*/}

            <Navbar/>
            <Accueil/>
            <Expertise/>
            <Technologie/>
            <Secteurs/>
            <Realisations/>
            <MediasSalons/>
            <Partenaires/>
            <Contact/>
            <Footer/>
        </div>
        )
    }
}





