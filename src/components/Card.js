import React from 'react'

function Card({ img, title, text, price, tag, badge }) {
    return (
        <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden card-hover bg-white">
            {/* Badge / Tag (Optional) */}
            {(badge || tag) && (
                <span className="position-absolute top-0 start-0 bg-danger text-white px-3 py-1 m-3 rounded-pill small fw-semibold z-1 shadow-sm">
                    {badge || tag}
                </span>
            )}

            {/* Image Container with Zoom effect */}
            <div className="card-img-wrapper position-relative overflow-hidden bg-light">
                <img
                    src={img}
                    className="card-img-top object-fit-cover transition-all"
                    alt={title || "Menu item"}
                    style={{ height: '220px' }}
                />
            </div>

            {/* Card Content - Pure Presentation Showcase */}
            <div className="card-body d-flex flex-column p-4 text-center">
                <h5 className="card-title fw-bold text-dark mb-2">{title}</h5>
                <p className="card-text text-muted small flex-grow-1 mb-3 lh-relaxed">{text}</p>

                {/* Price & Hotel Served Info (NO Order Button) */}
                <div className="d-flex align-items-center justify-content-between mt-auto pt-3 border-top w-100">
                    <span className="small text-muted fw-medium">Served Fresh Daily</span>
                    {price && <span className="fw-bold fs-5 text-danger bg-danger-subtle px-3 py-1 rounded-pill">{price}</span>}
                </div>
            </div>
        </div>
    )
}

export default Card
