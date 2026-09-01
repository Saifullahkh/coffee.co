import React from 'react'
import place1 from '../../assets/place1.jpg'
import place2 from '../../assets/place2.jpg'
import { FiMapPin, FiWifi, FiCoffee, FiShield } from 'react-icons/fi'

function Place() {
    const highlights = [
        { icon: <FiCoffee className="text-danger fs-5" />, title: "Cozy & Elegant Ambiance", desc: "Thoughtfully designed seating for individuals and groups." },
        { icon: <FiWifi className="text-danger fs-5" />, title: "High-Speed Wi-Fi & Power Stations", desc: "Ideal environment for remote work, business meetings, and study." },
        { icon: <FiShield className="text-danger fs-5" />, title: "Exclusive Hotel Lounge Access", desc: "Private and quiet environment with premium hospitality service." }
    ]

    return (
        <section className="py-5 bg-white" id="place">
            <div className="container py-lg-4">
                {/* Section Header */}
                <div className="text-center mb-5">
                    <span className="text-danger fw-semibold text-uppercase tracking-wider">Hotel Atmosphere & Lounge</span>
                    <h2 className="display-6 fw-bold text-dark mt-1">
                        Relax & Unwind In Our Luxury Space
                    </h2>
                    <div className="bg-danger mx-auto mt-2" style={{ width: '60px', height: '3px', borderRadius: '2px' }}></div>
                </div>

                {/* Content Row */}
                <div className="row align-items-center g-5">
                    {/* Image Showcase Column */}
                    <div className="col-lg-6">
                        <div className="position-relative">
                            <img
                                src={place1}
                                alt="Cozy Hotel Coffee Lounge Atmosphere"
                                className="img-fluid rounded-4 shadow-lg w-100 object-fit-cover"
                                style={{ maxHeight: '420px' }}
                            />
                            {/* Secondary overlapping thumbnail */}
                            <div className="position-absolute bottom-0 end-0 m-3 p-1 bg-white rounded-3 shadow d-none d-md-block" style={{ width: '160px' }}>
                                <img src={place2} alt="Lounge Seating" className="img-fluid rounded-2" />
                            </div>
                            {/* Floating Experience Badge */}
                            <div className="position-absolute bottom-0 start-0 bg-dark text-white p-3 m-3 rounded-3 shadow d-none d-sm-block bg-opacity-75 backdrop-blur">
                                <span className="fw-bold fs-5 text-danger d-block">100% Comfort</span>
                                <small className="text-white-50">Designed for Productivity & Peace</small>
                            </div>
                        </div>
                    </div>

                    {/* Text Content Column */}
                    <div className="col-lg-6 ps-lg-4">
                        <span className="badge bg-danger-subtle text-danger px-3 py-2 rounded-pill mb-3 fw-medium">
                            Hotel Lounge & Dining
                        </span>
                        <h3 className="fw-bold text-dark mb-3 display-7">
                            A Premium Space For Guests & Visitors
                        </h3>
                        <p className="text-muted fs-6 lh-base mb-4">
                            We provide the perfect location to stay productive, host business catch-ups, or simply relax with family.
                            Enjoy freshly brewed artisanal coffee surrounded by contemporary interior aesthetics.
                        </p>

                        {/* Feature List */}
                        <div className="d-flex flex-column gap-3 mb-4">
                            {highlights.map((item, index) => (
                                <div key={index} className="d-flex align-items-start gap-3 p-3 bg-light rounded-3">
                                    <div className="mt-1">{item.icon}</div>
                                    <div>
                                        <strong className="d-block text-dark small">{item.title}</strong>
                                        <span className="text-muted extra-small">{item.desc}</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <a href="#footer" className="btn btn-dark rounded-pill px-4 py-3 fw-semibold shadow-sm d-inline-flex align-items-center gap-2">
                            <FiMapPin className="text-danger" /> Find Hotel Location
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Place
