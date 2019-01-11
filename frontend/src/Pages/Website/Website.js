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

import MetaTags from 'react-meta-tags';
import axios from "axios";

export default class Website extends Component {

    state= {
        configurations: []
    };

    componentDidMount = () => {
        axios.get('/configurations')
            .then((res) => {
                this.setState({configurations: res.data.configurations[0]})
            })
            .catch((err) => console.log("Erreur lors de l'obtention des configurations"))
    };

render() {

    return(
        <div>
            <MetaTags>
                  <title>Walkoo</title>
                  <meta name="description" content= {this.state.configurations.metaDescription} />
                  <meta property="og:title" content= {this.state.configurations.metaTitle} />
                  <meta property="og:image" content={this.state.configurations.metaImage} />
              </MetaTags>

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





