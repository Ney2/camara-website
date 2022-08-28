import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/"  element={<Home />} />
            </Routes>
            <Footer/>
        </BrowserRouter>
    );
};

export default App;
