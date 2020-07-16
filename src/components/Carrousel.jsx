import React from 'react'
import '../public/css/Carrousel.css'
import plomeria from '../public/images/plomero.jpg'
import pintura from '../public/images/pintor.jpg'
import electricista from '../public/images/electricista.jpg'

const Carrousel = () => {
    return (
        <div id="carrousel" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carrousel" data-slide-to="0" className="active"></li>
                <li data-target="#carrousel" data-slide-to="1"></li>
                <li data-target="#carrousel" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
                <div id="plomero" className="carousel-item active">
                    {/* <img id="plomeria" src={plomeria} className="d-block w-100" alt="..." /> */}
                    <div className="carousel-caption d-none d-md-block">
                        <h5>First slide label</h5>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </div>
                </div>
                <div id="pintor" className="carousel-item">
                    {/* <img src={pintura} className="d-block w-100" alt="..." /> */}
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Second slide label</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
                <div id="electricista" className="carousel-item">
                    {/* <img src={electricista} className="d-block w-100" alt="..." /> */}
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Third slide label</h5>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </div>
                </div>
            </div>
            <a className="carousel-control-prev" href="#carrousel" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carrousel" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    )
}

export default Carrousel
