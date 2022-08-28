import React from 'react';
import map from './Assets/map.png';
import ceo from './Assets/ceo.png';
import pt1 from './Assets/partners/pt1.png';
import pt2 from './Assets/partners/pt2.jpg';
import pt3 from './Assets/partners/pt3.png';
import pt4 from './Assets/partners/pt4.png';
import pt5 from './Assets/partners/pt5.jpg';
import pt6 from './Assets/partners/pt6.jpg';
import pt7 from './Assets/partners/pt7.jpg';
import pt8 from './Assets/partners/pt8.jpg';
import pt9 from './Assets/logo.jpg';
import './CSS/Home.css';

const Home = () => {
    return(
        <div className="container">
            <div className="header-container">
                <h1 className="ikn">IKN Working Site</h1>
            </div>
            <div className="ceo">
                <h2>A word form CEO  - John Fitzsimons</h2>
                <div className="ceo-info">
                    <img src={ceo} alt="ceo-pic" />
                    <p>iKnowledge is a hugely exciting opportunity for Camara to work with formidable 
                    organizations such as Avanti Communications and the UK Space Agency on this special 
                    project. We are delighted to bring our significant experience working in ICT in Education 
                    in Tanzania to bear on the design and delivery of this project. On a personal note, I am delighted 
                    that 250 schools in the country in which I lived for two years, will benefit from the integration of
                    ICT like so many western schools have. </p>
                </div>
            </div>

            <div className="about-info">
                <h2>About The Project</h2>
                <p>iKnowledge is a project focused on bringing ICT and Satellite Internet Access to schools across 25 regions in Tanzania. 
                  The project aims to Connect, Deliver, Train and Sustain schools in Tanzania through the support of its local and international partners.
                  100 Primary schools and 150 Secondary schools in Tanzania are being equipped with satellite broadband access and ICT equipment to allow 
                  teachers to use updated online teaching aids in their classes. With ICT infrastructure and broadband connectivity via satellite, iKnowledge 
                  provides digital training for teachers and educational content for teaching purposes, which is assessed based on learning outcomes. 
                  Teachers access broadband internet via Avanti &apos;s HYLAS 2 satellite, which provides 100% coverage of Tanzania.  
                  Broadband is installed and supported locally through service provider Infinity Africa, whilst the ICT hardware, digital training and educational 
                  software is delivered in partnership with Avanti Communications and Camara Education Tanzania. The programme is funded under the UK Space 
                  Agency &apos;s International Partnership Space Programme (IPSP).  </p>
            </div>

            <div className="ikn-coverage">
                <img className="map" src={map} alt="ikn-coverage-map" />
                <div className="coverage-info">
                    <h2>iKnowledge Coverage</h2>
                    <p>
                    iKnowledge provides connectivity to 10 schools per district in Tanzania (mix of Primary and Secondary schools). 
                    Within each district there is 1 Academy school, 3 Teaching Lab schools and 6 Administration schools.
                    Camara Education Tanzania is responsible for all primary schools (Academy school, 3 Teaching Lab schools) while 
                    Infinity Africa deal with secondary schools (Administration schools).
                    </p>
                </div>
            </div>
            
            <div className="partners">
                <h2>iKnowledge Partners</h2>
                <div className="partners-img">
                    <img src={pt1} alt="pt1-name"/>
                    <img src={pt2} alt="pt2-name"/>
                    <img src={pt3} alt="pt3-name"/>
                    <img src={pt4} alt="pt4-name"/>
                    <img src={pt5} alt="pt5-name"/>
                    <img src={pt6} alt="pt6-name"/>
                    <img src={pt7} alt="pt7-name"/>
                    <img src={pt8} alt="pt8-name"/>
                    <img src={pt9} alt="pt8-name"/>
                </div>
            </div>
        </div>
    );
};

export default Home;