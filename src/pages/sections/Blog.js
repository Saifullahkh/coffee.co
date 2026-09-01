import React from 'react'
import { FiArrowUpRight, FiCalendar, FiClock } from 'react-icons/fi'
import { blogPosts } from '../../data/blogData'

function Blog() {
    return (
        <section className="py-5 bg-light" id="blog">
            <div className="container py-lg-3">
                {/* Section Header */}
                <div className="text-center mb-5">
                    <span className="text-danger fw-semibold text-uppercase tracking-wider">Latest News & Stories</span>
                    <h2 className="display-6 fw-bold text-dark mt-1">
                        Explore Our Hotel Coffee Journal
                    </h2>
                    <div className="bg-danger mx-auto mt-2" style={{ width: '60px', height: '3px', borderRadius: '2px' }}></div>
                </div>

                {/* Blog Grid */}
                <div className="row g-4 justify-content-center">
                    {blogPosts.map((post) => (
                        <div key={post.id} className="col-12 col-md-6 col-lg-5">
                            <div className="card border-0 shadow-sm rounded-4 overflow-hidden h-100 card-hover bg-white">
                                {/* Image Container */}
                                <div className="position-relative overflow-hidden card-img-wrapper">
                                    <img
                                        src={post.img}
                                        alt={post.title}
                                        className="card-img-top object-fit-cover"
                                        style={{ height: '240px' }}
                                    />
                                    <span className="position-absolute top-0 start-0 bg-danger text-white px-3 py-1 m-3 rounded-pill small fw-medium">
                                        {post.badge}
                                    </span>
                                </div>

                                {/* Card Body */}
                                <div className="card-body p-4 d-flex flex-column">
                                    {/* Meta Details */}
                                    <div className="d-flex align-items-center gap-3 text-muted small mb-2">
                                        <span className="d-flex align-items-center gap-1">
                                            <FiCalendar className="text-danger" /> {post.date}
                                        </span>
                                        <span>•</span>
                                        <span className="d-flex align-items-center gap-1">
                                            <FiClock className="text-danger" /> {post.readTime}
                                        </span>
                                    </div>

                                    <h4 className="card-title fw-bold text-dark mb-3 fs-5">{post.title}</h4>
                                    <p className="card-text text-muted small flex-grow-1 lh-relaxed">{post.text}</p>

                                    {/* Read Article Action */}
                                    <div className="pt-3 border-top mt-auto">
                                        <a href="#blog" className="text-danger fw-semibold text-decoration-none d-inline-flex align-items-center gap-1">
                                            Read Full Story <FiArrowUpRight className="fs-5" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Blog
