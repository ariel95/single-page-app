import React from 'react'
import electricista from '../public/images/electricista2.jpg'
import pintor from '../public/images/pintor2.jpg'
import plomero from '../public/images/plomero2.jpg'
import '../public/css/Services.css'

const Services = () => {
    return (
        <div id="services">
            {/* <div className="title text-center">
                <h2>Servicios</h2>
            </div> */}
            <div className="service-1">
                <div class="card">
                    <div class="row no-gutters">
                        <div class="col-md-6">
                            <img src={electricista} class="card-img" alt="..." />
                        </div>
                        <div class="col-md-6">
                            <div class="card-body">
                                <h5 class="card-title">Electricidad</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="service-2">
                <div class="card">
                    <div class="row no-gutters">
                        <div class="col-md-6">
                            <div class="card-body">
                                <h5 class="card-title">Pintura</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <img src={pintor} class="card-img" alt="..." />
                        </div>
                    </div>
                </div>
            </div>
            <div className="service-3">
                <div class="card">
                    <div class="row no-gutters">
                        <div class="col-md-6">
                            <img src={plomero} class="card-img" alt="..." />
                        </div>
                        <div class="col-md-6">
                            <div class="card-body">
                                <h5 class="card-title">Plomería</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services
