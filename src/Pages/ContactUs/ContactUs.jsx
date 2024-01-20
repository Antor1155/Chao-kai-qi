import { toast } from "react-toastify";
import "./ContactUs.css"
import { motion } from "framer-motion"

const ContactUs = () => {

    const handleInfoSubmit = (e) => {
        e.preventDefault()
        toast("Thank you for contacting us. We wil get back to you shortly")
        e.target.reset()
    }


    return (
        <section id="contact-us">
            <div className="info-container">
                <h2 className="company-font mb-16">Query about</h2>

                <p className="point">Get to know us better.</p>
                <p className="point">Do query about any specific product.</p>
                <p className="point">Want to know about offers.</p>
                <p className="point">Our transport facility.</p>
                <p className="point">Book a visit to our company.</p>
                <p className="point">Any personal query you have.</p>

                <div className="info">
                    <p className="font-24 info-blue mb-32 mt-gapping-tape">We will reply you with :</p>


                    <p className="point">Product List</p>

                    <p className="point">Special price</p>

                    <p className="point">Transport query</p>

                    <p className="point">Any specific query</p>

                    <p className="point">Terms and conditions</p>


                    <h2 className="company-font text-center mt-32">ChaoKaiQi</h2>

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
                        <label htmlFor="email">Email *</label>
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