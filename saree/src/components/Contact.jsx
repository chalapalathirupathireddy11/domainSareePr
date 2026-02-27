import React from 'react'

const Contact = () => {
  return (
    <div>
        <section class="inner-banner py-5">
            <div class="w3l-breadcrumb py-lg-5">
                <div class="container pt-4 pb-sm-4">
                    <h4 class="inner-text-title pt-5">Contact Us</h4>
                    <ul class="breadcrumbs-custom-path">
                        <li><a>Home</a></li>
                        <li class="active"><i class="fas fa-angle-right"></i>Contact Us</li>
                    </ul>
                </div>
            </div>
        </section>
        <section class="w3l-contact py-5" id="contact">
            <div class="container py-md-5 py-4">
                <div class="title-main text-center mx-auto mb-md-5 mb-4">
                    <p class="text-uppercase">Get In Touch</p>
                    <h3 class="title-style">Contact Us</h3>
                </div>
                <div class="row contact-block">
                    <div class="col-md-7 contact-right">
                        <ul>
                            <li class="alert alert-danger" role="alert"/>
                        </ul>
                        <form 
                        action="/saveMsg" method="post" 
                        class="signin-form" >
                            <div class="input-grids">
                                <div class="row">
                                    <div class="col-sm-6">
                                        <input type="text" placeholder="Your Name" class="contact-input" />
                                    </div>
                                    <div class="col-sm-6">
                                        <input type="text" placeholder="Your Mobile Number" class="contact-input" />
                                    </div>
                                </div>
                                <input type="text" placeholder="Your Email" class="contact-input" />
                                <input type="text" placeholder="Subject" class="contact-input" />
                            </div>
                            <div class="form-input">
                                <textarea placeholder="Type your message here"></textarea>
                            </div>
                            <div class="text-start">
                                <button class="btn btn-style btn-style-3">Send Message</button>
                            </div>
                        </form>
                    </div>
                    <div class="col-md-5 ps-lg-5 mt-md-0 mt-5">
                        <div class="contact-left">
                            <div class="cont-details">
                                <div class="d-flex contact-grid">
                                    <div class="cont-left text-center me-3">
                                        <i class="fas fa-building"></i>
                                    </div>
                                    <div class="cont-right">
                                        <h6>Shop Address</h6>
                                        <p>Sarees shop, 10001, 5th Avenue, #06 lane street, NY - 10017.</p>
                                    </div>
                                </div>
                                <div class="d-flex contact-grid mt-4 pt-lg-2">
                                    <div class="cont-left text-center me-3">
                                        <i class="fas fa-phone-alt"></i>
                                    </div>
                                    <div class="cont-right">
                                        <h6>Call Us</h6>
                                        <p><a href="tel:+91(00) 000 0000">+91(91) 673 4587</a></p>
                                    </div>
                                </div>
                                <div class="d-flex contact-grid mt-4 pt-lg-2">
                                    <div class="cont-left text-center me-3">
                                        <i class="fas fa-envelope-open-text"></i>
                                    </div>
                                    <div class="cont-right">
                                        <h6>Email Us</h6>
                                        <p><a href="mailto:info@SareesApp.com" class="mail">info@SareesApp.com</a></p>
                                    </div>
                                </div>
                                <div class="d-flex contact-grid mt-4 pt-lg-2">
                                    <div class="cont-left text-center me-3">
                                        <i class="fas fa-headphones-alt"></i>
                                    </div>
                                    <div class="cont-right">
                                        <h6>Customer Support</h6>
                                        <p><a href="support@SareesApp.com" class="mail">support@SareesApp.com</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div class="map">
            <iframe src="https://maps.app.goo.gl" width="100%" height="400" frameborder="0" allowfullscreen=""></iframe>
        </div>
        <button onclick="topFunction()" id="movetop" title="Go to top">
            <span class="fas fa-level-up-alt" aria-hidden="true"></span>
        </button>
    </div>
  )
}

export default Contact