import React, { useState } from 'react'
import { Container, Navbar as BSNavbar, Nav, Button, Modal } from 'react-bootstrap'
import { FiMapPin, FiPhone, FiClock } from 'react-icons/fi'

function Navbar() {
    const [showContact, setShowContact] = useState(false);

    return (
        <>
            <BSNavbar expand="lg" variant="dark" className="bg-dark py-3 sticky-top shadow-sm border-bottom border-secondary border-opacity-25">
                <Container>
                    {/* Logo / Brand Representation */}
                    <BSNavbar.Brand href="#home" className="fw-bold fs-3 text-white d-flex align-items-center gap-1">
                        <span>Coffee<span className="text-danger fw-bolder">.</span>Co</span>
                    </BSNavbar.Brand>

                    {/* Mobile Toggle Button */}
                    <BSNavbar.Toggle aria-controls="basic-navbar-nav" className="border-0 shadow-none" />

                    {/* Navigation Links */}
                    <BSNavbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto gap-lg-4 my-2 my-lg-0 align-items-center">
                            <Nav.Link href="#home" className="text-white-50 text-hover-white fw-medium">Home</Nav.Link>
                            <Nav.Link href="#special" className="text-white-50 text-hover-white fw-medium">Why Us</Nav.Link>
                            <Nav.Link href="#menu" className="text-white-50 text-hover-white fw-medium">Menu Showcase</Nav.Link>
                            <Nav.Link href="#place" className="text-white-50 text-hover-white fw-medium">Atmosphere</Nav.Link>
                            <Nav.Link href="#blog" className="text-white-50 text-hover-white fw-medium">News</Nav.Link>
                        </Nav>

                        {/* Hotel Visit CTA Button */}
                        <div className="d-flex justify-content-center">
                            <Button
                                variant="outline-danger"
                                className="rounded-pill px-4 fw-semibold border-2 d-flex align-items-center gap-2"
                                onClick={() => setShowContact(true)}
                            >
                                <FiMapPin /> Visit Our Hotel
                            </Button>
                        </div>
                    </BSNavbar.Collapse>
                </Container>
            </BSNavbar>

            {/* Quick Location & Info Modal */}
            <Modal show={showContact} onHide={() => setShowContact(false)} centered className="rounded-4">
                <Modal.Header closeButton className="border-0 bg-dark text-white p-4">
                    <Modal.Title className="fw-bold">
                        Coffee<span className="text-danger">.</span>Co Hotel & Lounge
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="p-4 bg-light">
                    <p className="text-muted mb-4">
                        We look forward to welcoming you to our luxury cafe lounge. Here are our visit details:
                    </p>
                    <div className="d-flex flex-column gap-3">
                        <div className="d-flex align-items-start gap-3 p-3 bg-white rounded-3 shadow-sm">
                            <FiMapPin className="text-danger fs-4 flex-shrink-0 mt-1" />
                            <div>
                                <strong className="d-block text-dark">Location & Address</strong>
                                <span className="text-muted small">Islamabad </span>
                            </div>
                        </div>
                        <div className="d-flex align-items-start gap-3 p-3 bg-white rounded-3 shadow-sm">
                            <FiPhone className="text-danger fs-4 flex-shrink-0 mt-1" />
                            <div>
                                <strong className="d-block text-dark">Direct Phone Line</strong>
                                <a href="tel:+923359199919" className="text-danger text-decoration-none small fw-semibold">+92 335 9199919</a>
                            </div>
                        </div>
                        <div className="d-flex align-items-start gap-3 p-3 bg-white rounded-3 shadow-sm">
                            <FiClock className="text-danger fs-4 flex-shrink-0 mt-1" />
                            <div>
                                <strong className="d-block text-dark">Opening Hours</strong>
                                <span className="text-muted small">Monday – Sunday: 8:00 AM – 11:00 PM</span>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer className="border-0 bg-light p-3">
                    <Button variant="danger" className="w-100 rounded-pill fw-semibold" onClick={() => setShowContact(false)}>
                        Close & Explore Site
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Navbar
