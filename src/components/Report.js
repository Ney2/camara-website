import React from 'react';
import bg from './Assets/bg.jpg';
import './CSS/Report.css';

const Report = () => {
    return (
        <div>
            <div className="header-container">
                <div>
                    <img src={bg} className="background" alt="children using Camara's computer" />
                </div>              
                <h1 className="ikn">Reports</h1>
            </div>

            <div className="maintenance">
                <h2>Maintenance Reports</h2>
                <p>This are school reports about maintenance phase I and II. These reports indicate the name and date the school was visited, 
                   number of items inspected, identified problems (s) and comments from the Camara staff who visit the school. Each form is stamped 
                   and signed by school head or his/her assistance.</p>
            </div>
            <div className="sheets">
                <div className="google-sheet">
                    <p>Phase 1:</p>
                    <p>Google Sheet</p>
                </div>
                <div className="google-sheet">
                    <p>Phase 2:</p>
                    <p>Google Sheet</p>
                </div>
            </div>
            <div className="training">
                <h2>Training Reports</h2>
            </div>
        </div>
    );
};

export default Report;