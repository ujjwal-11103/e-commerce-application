import React from 'react'
import Layout from '../Components/Layout/Layout'
import "../Styles/Contact.css"

const Contact = () => {
    return (
        <div>
            <Layout title={"Contact Us"}>
                {/* <div className="ctn-container">
                    <h1>Contact Us</h1>

                    <div className="ctn-mid">

                        <div className="ctn-left">
                            <img src="/images/ContactUs.png" alt="contact" />
                        </div>
                        <div className="ctn-right">
                            <p> If you have any questions about your orders, our products, or our services, our customer support team is here to assist you. You can reach us via:</p>

                            <ul>

                                <li>Email: support@shopease.com</li>
                                <li>  Phone: +1 (800) 123-4567</li>
                                <li> Live Chat: Available 24/7 on our website</li>


                            </ul>
                            <h4>Business Inquiries:</h4>
                            <p> 
                                For business-related inquiries, partnerships, or collaborations, please contact:</p>
                            Email: business@shopease.com

                        </div>
                    </div>
                </div> */}
                <div class="container mt-5">
                    <img src="/images/ContactUs.png" alt="contact" />

                    <h1>Contact Us</h1>
                    <form>
                        <div class="mb-3">
                            <label for="name" class="form-label">Name</label>
                            <input type="text" class="form-control" id="name" placeholder="Your Name" />
                        </div>
                        <div class="mb-3">
                            <label for="email" class="form-label">Email</label>
                            <input type="email" class="form-control" id="email" placeholder="Your Email" />
                        </div>
                        <div class="mb-3">
                            <label for="message" class="form-label">Message</label>
                            <textarea class="form-control" id="message" rows="4" placeholder="Your Message"></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary mb-2">Submit</button>
                    </form>
                </div>
            </Layout>
        </div>
    )
}

export default Contact
