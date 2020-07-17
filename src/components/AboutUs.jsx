import React from 'react'
import '../public/css/AboutUs.css'
import diego from '../public/images/Diego.jpg' 

const AboutUs = () => {
    return (
        <div id="about-us" className="text-center p-5">
            <div className="title">
                <h2>Sobre nosotros</h2>
            </div>
            <div className="details">
                <label>Somos una empresa dedicada a distintos servicios domesticos.</label>
            </div>
            <div className="pictures">
                <div className="picture pt-5 pb-3">
                    <img src={diego} alt="" srcset=""/>
                </div>
                <h3>Diego Vergara</h3>
            </div>
        </div>
    )
}

export default AboutUs
