import React from 'react';
import bg from './Assets/bg.jpg';
import './CSS/Equipments.css';

const Equipments = () => {
    return (
        <div>
            <div className="header-container">
                <div>
                    <img src={bg} className="background" alt="children using Camara's computer" />
                </div>              
                <h1 className="ikn">Equipments</h1>
            </div>

            <div className="fault">
                <h2>Fault Equipment&apos;s From The Field</h2>
                <p>This is the list of all reported fault equipment&apos;s from the field. It include all stolen, broken and damaged 
                   equipment&apos;s from each school. This sheet indicate the details of the school, details of the fault equipment&apos;s, 
                   whether the equipment have been replaced or not and who replaced the equipment (CDS/Camara).</p>
            </div>
            <div className="google-sheet">
                <p>Google Sheet</p>
            </div>
            <div className="projectors">
                <h2>All Projectors</h2>
                <p>This is the list of all projectors with their Afr-track number and serial numbers.
                   This list contain projectors supplied to primary schools and the one submitted to Infinity for secondary schools. 
                   The list also indicate schools having projector with HDMI port problems, and if that school
                   have been supplied with HDMI/VGA convertor to resolve that problem.</p>
            </div>
            <div className="google-sheet">
                <p>Google Sheet</p>
            </div>
            
            <div className="stock">
                <h2>iKnowledge Stock Count</h2>
                <p>This is the list of the current IKN equipment&apos;s at the schools, in the hub and other locations.</p>
            </div>
            <div className="google-sheet">
                <p>Google Sheet</p>
            </div>
        </div>
    );
};

export default Equipments;