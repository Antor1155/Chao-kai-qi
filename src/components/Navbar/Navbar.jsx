import { Link } from "react-router-dom";
import { motion } from "framer-motion"
import languageButton from "../../assets/logos/language-options.svg";
import cart from "../../assets/logos/cart.svg"
import menu from "../../assets/logos/Menu.svg"
import cancel from "../../assets/logos/Cancel.svg"
import "./Navbar.css"

import { Ccontext } from "../../CartContext";
import { useContext } from "react";

// eslint-disable-next-line react/prop-types
const Navbar = ({setCatagoryOpen}) => {
    const {cartData} = useContext(Ccontext)

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
            }
        }
    }

    const item = {
        hidden: { opacity: 0 },
        show: { opacity: 1 },
    }

    const handleNavMenues = () => {
        document.getElementById("nav-menues").classList.toggle("visible")
    }

    return (
        <header>
            <nav>
                <Link to="/" className="company-font"> ChaoKaiQi</Link>

                <button id="menu" onClick={handleNavMenues}>
                    <img src={menu} alt="nav bar menu icon" />
                </button>

                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"

                    id="nav-menues"
                    onClick={handleNavMenues}
                >
                    <motion.button whileTap={{ scale: .7 }} id="cancel">
                        <img src={cancel} alt="hide nav bar" />
                    </motion.button>

                    <motion.span variants={item} whileTap={{ scale: .7 }}><Link to="/">HOME</Link></motion.span>

                    <motion.span
                        variants={item}
                        whileTap={{ scale: .7 }}
                        style={{ cursor: "pointer" }}
                        onMouseEnter={() => setCatagoryOpen(true)}
                        onMouseLeave={() => setCatagoryOpen(false)}
                        whileHover={{color:"#C90A1E"}}
                    >
                        CATAGORY
                    </motion.span>

                    <motion.span variants={item} whileTap={{ scale: .7 }}><Link to="/all-wholesale-tablet-covers/all">ALL PRODUCTS</Link></motion.span>
                    <motion.span variants={item} whileTap={{ scale: .7 }}><Link to="/about-us">ABOUT US</Link></motion.span>
                    <motion.span variants={item} whileTap={{ scale: .7 }}><Link to="/contact-us">CONTACT US</Link></motion.span>

                    <motion.span variants={item} whileTap={{ scale: .7 }}>
                        <img src={languageButton} alt="language changing button" className="logo" />
                    </motion.span>

                    <motion.span id="cart-btn" variants={item} whileTap={{ scale: .7 }}>
                        {cartData?.length ?
                            <div id="cart-amount">
                            </div>
                            :
                            ""
                        }

                        <Link to="/cart">
                            <img src={cart} alt="cart page of products" className="logo" />
                        </Link>
                    </motion.span>

                </motion.div>

            </nav>
        </header>

    );
};

export default Navbar;