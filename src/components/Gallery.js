import React from 'react';
import bg from './Assets/bg.jpg';
import './CSS/Gallery.css';

const Gallery = () => {
    return (
        <div>
            <div className="header-container">
                <div>
                    <img src={bg} className="background" alt="children using Camara's computer" />
                </div>              
                <h1 className="ikn">Gallery</h1>
            </div>
            <div className="gallery">
                <div className="school-photos">
                    <h2> 
                        <a href="https://photos.google.com/share/AF1QipO3esMt9BjCVIzqN2AF-5LGIBTPqwW6hPbsX1OTF4H56l9Pq6P0rCGeJYeQWCjhew?key=VWxYUzZTTExGYUxBaWdyeTlGeUktU2kwanNlbU93">
                    Feedback From The Schools</a>
                    </h2>
                    <p>This album contain pictures and video clips from different schools which demonstrate how they have been using the project 
                   and how the school benefit from the project. 
                   Click <a href="https://photos.google.com/share/AF1QipO3esMt9BjCVIzqN2AF-5LGIBTPqwW6hPbsX1OTF4H56l9Pq6P0rCGeJYeQWCjhew?key=VWxYUzZTTExGYUxBaWdyeTlGeUktU2kwanNlbU93">here </a>
                   to access the album.</p>
                </div>

                <div className="training-photos">
                    <h2>IKN One Training</h2>
                    <p>This folder contain different photos which ware taken during training sessions in IKN1. The folders are organized per 
                  region/route and they contain photos from all three phases of the training.</p>
                </div>

                <div className="class-photos">
                    <h2>Class Sessions Observation</h2>
                    <p>This are photos of class sessions taken in all Academy schools during IKN1 maintenance visits. The aim was to observe how 
                   the teacher present their lesson, identify their weakness and advise them how they can improve.</p>
                </div>
            </div>
            <div className="google-sheet">
                <p>Google Sheet</p>
            </div>
        </div>
    );
};

export default Gallery;