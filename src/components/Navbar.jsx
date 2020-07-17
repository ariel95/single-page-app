import React from 'react'
import '../public/css/Navbar.css'
import {isMobile} from '../helpers/window'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'



const Navbar = (props) => {

    console.log(isMobile());

    const desktopContent = () => {
        return(
            <div id="desktop-actions" className="btn-group dropleft">
                 <a className="navbar-action" href="#about-us">
                    Sobre nosotros
                </a>
                <a className="navbar-action" href="#services">
                    Servicios
                </a>
                <a className="navbar-action" href="#prices">
                    Cotizaciones
                </a>
                <a className="navbar-action" href="#contact">
                    Contacto
                </a>
            </div>
        )
    }

    const mobileContent = () =>{
        return(
            <div id="mobile-actions" className="btn-group dropleft">
                <button className="btn-actions" data-toggle="dropdown">
                    <FontAwesomeIcon icon={faBars} />
                </button>

                <div className="dropdown-menu">
                    <button
                        className="dropdown-item"
                        type="button"
                    >
                        <a href="#about-us" className="navbar-action">Sobre nosotros</a>
                    </button>
                    <button
                        className="dropdown-item"
                        type="button"
                    >
                        <a href="#services" className="navbar-action">Servicios</a>
                    </button>
                    <button
                        className="dropdown-item"
                        type="button"
                    >
                        <a href="#prices" className="navbar-action">Cotizaciones</a>
                    </button>
                    <button
                        className="dropdown-item"
                        type="button"
                    >
                        <a href="#contact" className="navbar-action">Contactenos</a>
                    </button>
                </div>
            </div>
        )
    }


    return (
        <nav id="navbar" className="navbar navbar-light bg-light top-navbar px-4">
            <a className="navbar-brand" href="/">
                Plomería Bautista Ángel
            </a>
            {
                isMobile() ? (
                    mobileContent()
                ) : (
                    desktopContent()
                )
            }
        </nav >
    )
}

export default Navbar
