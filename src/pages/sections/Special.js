import React from 'react'
import { specialFeatures } from '../../data/specialData'

function Special() {
    return (
        <section className="py-5 bg-white" id="special">
            <div className="container py-lg-4">
                {/* Section Header */}
                <div className="text-center mb-5">
                    <span className="text-danger fw-semibold text-uppercase tracking-wider">Why Choose Us</span>
                    <h2 className="display-6 fw-bold text-dark mt-1">
                        Handcrafted Flavors That <br className="d-none d-sm-inline" /> Delight Every Hotel Guest
                    </h2>
                    <div className="bg-danger mx-auto mt-2" style={{ width: '60px', height: '3px', borderRadius: '2px' }}></div>
                </div>

                {/* Features Grid */}
                <div className="row g-4 justify-content-center">
                    {specialFeatures.map((feature) => (
                        <div key={feature.id} className="col-12 col-md-4">
                            <div className="card border-0 shadow-sm p-4 rounded-4 text-center h-100 card-hover transition-all bg-light">
                                {/* Icon Wrapper */}
                                <div className="mx-auto mb-4 d-flex align-items-center justify-content-center bg-white rounded-circle shadow-sm" style={{ width: '90px', height: '90px' }}>
                                    <img
                                        src={feature.img}
                                        alt={feature.title}
                                        style={{ width: '50px', height: '50px', objectFit: 'contain' }}
                                    />
                                </div>

                                {/* Content */}
                                <h4 className="fw-bold text-dark mb-2 fs-5">{feature.title}</h4>
                                <p className="text-muted small mb-0 lh-relaxed">
                                    {feature.text}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Special
