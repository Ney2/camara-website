import React from 'react';
import bg from './Assets/bg.jpg';
import './CSS/Schools.css';

const Schools = () => {
    return (
        <div>
            <div className="header-container">
                <div>
                    <img src={bg} className="background" alt="children using Camara's computer" />
                </div>              
                <h1 className="ikn">Schools & Teachers</h1>
            </div>

            <div className="school-list">
                <h2>iKnowledge Master School List</h2>
                <p>This is the list of all iKnowledge primary and secondary schools in Tanzania mainland and Zanzibar.
                   It include region, district, school name, headteacher name, phone number plus other details.</p>
            </div>
            <div className="google-sheet">
                <p>Google Sheet</p>
            </div>
            <div className="trainee-list">
                <h2>iKnowledge Trainee List</h2>
                <p>This is the list of all trained teachers and education officers during phase one. It include name, phone number and email address. 
                   The best ICT teacher for each school is highlighted using light blue color. </p>
            </div>
            <div className="google-sheet">
                <p>Google Sheet</p>
            </div>
        </div>
    );
};

export default Schools;