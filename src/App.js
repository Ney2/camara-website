import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Equipments from './components/Equipments';
import Schools from './components/Schools';
import Report from './components/Report';
import Gallery from './components/Gallery';

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/"  element={<Home />} />
                <Route path="/equipments" element={<Equipments />} />
                <Route path="/schools&teachers" element={<Schools />} />
                <Route path="reports" element={<Report/>} />
                <Route path="gallery" element={<Gallery/>} />
            </Routes>
            <Footer/>
        </BrowserRouter>
    );
};

export default App;
