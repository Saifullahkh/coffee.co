import React from 'react'
import { FiMapPin, FiCompass } from 'react-icons/fi'
import '../../styles/Hero.css'

function Hero() {
    return (
        <section className="hero-section" id="home">
            <div className="hero-overlay d-flex align-items-center justify-content-center">
                <div className="container text-center text-white py-5">
                    <div className="row justify-content-center">
                        <div className="col-lg-9 col-xl-8">
                            {/* Hotel Representation Badge */}
                            <span className="badge bg-danger text-white px-3 py-2 rounded-pill text-uppercase tracking-wider fw-semibold mb-3">
                                Premier Hotel & Coffee Lounge
                            </span>

                            <h1 className="hero-title fw-bold mb-4 display-4 text-white">
                                Experience Luxury Taste <br className="d-none d-md-inline" />
                                With Handcrafted Coffee <br className="d-none d-md-inline" />
                                In A Cozy Atmosphere.
                            </h1>

                            <p className="hero-subtitle text-white-50 mb-5 fs-5 fw-light col-md-10 mx-auto lh-lg">
                                Welcome to Coffee.Co — your ideal destination to relax, meet colleagues, and savor artisanal roasts brewed fresh in our exclusive hotel lounge.
                            </p>

                            {/* Showcase CTAs (NO Order Buttons) */}
                            <div className="d-flex flex-wrap justify-content-center gap-3">
                                <a href="#place" className="btn btn-danger btn-lg rounded-pill px-4 py-3 fw-semibold d-flex align-items-center gap-2 shadow">
                                    <FiMapPin /> Visit Our Hotel
                                </a>
                                <a href="#menu" className="btn btn-outline-light btn-lg rounded-pill px-4 py-3 fw-semibold d-flex align-items-center gap-2">
                                    <FiCompass /> Explore Menu
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
