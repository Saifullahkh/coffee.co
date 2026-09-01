import React, { useState } from 'react'
import Card from '../../components/Card'
import { categories, menuItems } from '../../data/menuData'

function Menu() {
    const [activeTab, setActiveTab] = useState('all');

    const filteredItems = activeTab === 'all'
        ? menuItems
        : menuItems.filter(item => item.category === activeTab);

    return (
        <section className='py-5 bg-light' id='menu'>
            <div className='container py-lg-3'>
                {/* Section Header */}
                <div className="text-center mb-5" id="product">
                    <span className="text-danger fw-semibold text-uppercase tracking-wider">Hotel Menu Showcase</span>
                    <h2 className="display-6 fw-bold text-dark mt-1">Discover Our Special Selection</h2>
                    <p className="text-muted small max-w-xl mx-auto mt-2">
                        Explore our curated list of handcrafted beverages and hotel pastries prepared fresh daily by our culinary team.
                    </p>
                    <div className="bg-danger mx-auto mt-3" style={{ width: '60px', height: '3px', borderRadius: '2px' }}></div>
                </div>

                {/* Category Filter Buttons */}
                <div className="row justify-content-center mb-5">
                    <div className="col-lg-10">
                        <div className="d-flex flex-wrap justify-content-center gap-3">
                            {categories.map((cat) => {
                                const isActive = activeTab === cat.id;
                                const count = cat.id === 'all'
                                    ? menuItems.length
                                    : menuItems.filter(item => item.category === cat.id).length;

                                return (
                                    <button
                                        key={cat.id}
                                        onClick={() => setActiveTab(cat.id)}
                                        className={`btn d-flex align-items-center gap-2 px-4 py-2 rounded-pill transition-all border-0 shadow-sm ${isActive
                                                ? 'bg-danger text-white shadow'
                                                : 'bg-white text-dark hover-shadow border'
                                            }`}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        <span className="fw-semibold small">{cat.name}</span>
                                        <span
                                            className={`badge rounded-pill ${isActive ? 'bg-white text-danger' : 'bg-secondary-subtle text-secondary'
                                                }`}
                                        >
                                            {count}
                                        </span>
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Responsive Grid - Hotel Menu Showcase Cards (NO Order Buttons) */}
                <div className="row g-4">
                    {filteredItems.map((item) => (
                        <div key={item.id} className="col-12 col-sm-6 col-lg-4 col-xl-3">
                            <Card
                                img={item.img}
                                title={item.title}
                                text={item.text}
                                price={item.price}
                                badge={item.badge}
                                tag={item.tag}
                            />
                        </div>
                    ))}
                </div>

                {/* Note for hotel visitors */}
                <div className="text-center mt-5 pt-3">
                    <div className="p-3 bg-white rounded-4 d-inline-block border shadow-sm text-muted small">
                        💡 <strong className="text-dark">Hotel Service Note:</strong> All menu items are served fresh at our hotel dining room & lounge. Please visit our front desk or lounge counter to place your order in person.
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Menu
