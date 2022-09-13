import React from 'react';
import * as AiIcon from 'react-icons/ai';
import * as BsIcon from 'react-icons/bs';
import * as FaIcon from 'react-icons/fa';
import * as ImIcon from 'react-icons/im';
import './CSS/Footer.css';

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="infos">
                <div className="contact">
                    <h5>Contact Us</h5>
                    <p><BsIcon.BsTelephone className="phone"/><span> +255 623 396 600, +255 758 396 600</span></p>
                    <p><AiIcon.AiOutlineMail className="mail"/><span> tanzania@camara.org</span></p>
                </div>
                <div className="location">
                    <h5><ImIcon.ImLocation2 className="gps"/> Address</h5>
                    <p>PO Box 13484,</p>
                    <p>Block 3, Plot No. 47,</p>
                    <p>Engaruka St,</p>
                    <p>Kurasini,</p>
                    <p>Dar Es Salaam.</p>
                </div>
                <div className="social">
                    <h5>Follow us</h5>
                    <ul className="links">
                        <a href="#" className="facebook"><li><FaIcon.FaFacebookF /></li></a>
                        <a href="#" className="linkedin"><li><FaIcon.FaLinkedinIn /></li></a>
                        <a href="#" className="twitter"><li><AiIcon.AiOutlineTwitter /></li></a>
                        <a href="#" className="instagram"><li><AiIcon.AiFillInstagram /></li></a>
                    </ul>
                </div>
            </div>
            <div className="footer">
                <p>Camara Education Tanzania</p>
                <p>Copyrigth © 2022 <a href="#">Camara Education.Ltd</a></p>
            </div>
        </div>
    );
};

export default Footer;