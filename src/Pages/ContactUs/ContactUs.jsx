import "./ContactUs.css"
import { motion } from "framer-motion"

const ContactUs = () => {

    const handleInfoSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <section id="contact-us">
            <div className="info-container">
                <h2 className="company-font mb-16">Query about</h2>
                <p>Get to know us better.</p>
                <p>Do query about any specific product.</p>
                <p>Want to know about offers.</p>
                <p>Our transport facility.</p>
                <p>Book a visit to our company.</p>
                <p>Any personal query you have.</p>

                <div className="info">
                    <p className="font-20 info-blue">We will send you with</p>

                    <div className="list">
                        <div className="info-point"></div>
                        <p>Product List</p>
                    </div>
                    <div className="list">
                        <div className="info-point"></div>
                        <p>Special price</p>
                    </div>
                    <div className="list">
                        <div className="info-point"></div>
                        <p>Transport query</p>
                    </div>
                    <div className="list">
                        <div className="info-point"></div>
                        <p>Any specific query</p>
                    </div>
                    <div className="list">
                        <div className="info-point"></div>
                        <p>Terms and conditions</p>
                    </div>

                    <h2 className="company-font">ChaoKaiQi</h2>

                </div>
            </div>

            <div className="contact-form-container">
                <h1 className="company-font mb-16">Contact Us</h1>
                <form onSubmit={handleInfoSubmit} className="contact-form">
                    <div>
                        <label htmlFor="name">Name *</label>
                        <input id="name" name="name" type="text" required />
                    </div>

                    <div>
                        <label htmlFor="country">Country *</label>
                        <input id="country" name="country" type="text" required />
                    </div>

                    <div>
                        <label htmlFor="organization">Organization name *</label>
                        <input id="organization" name="organization" type="text" required />
                    </div>

                    <div>
                        <label htmlFor="email">email *</label>
                        <input id="email" name="email" type="text" required />
                    </div>

                    <div>
                        <label htmlFor="mobile">Phone number *</label>
                        <input id="mobile" name="mobile" type="text" required />
                    </div>

                    <div>
                        <label htmlFor="note">Special note</label>
                        <textarea name="note" id="note" cols="22" rows="4"></textarea>
                    </div>

                    <motion.button
                        type="submit"
                        className="fw-button"
                        whileTap={{ scale: 0.95 }}
                        whileHover={{ scale: 1.05 }}
                    >SUBMIT</motion.button>
                </form>
            </div>
        </section>
    );
};

export default ContactUs;