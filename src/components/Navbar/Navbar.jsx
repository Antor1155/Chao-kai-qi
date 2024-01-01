import { Link } from "react-router-dom";
import { motion } from "framer-motion"
import languageButton from "../../assets/logos/language-options.svg";
import cart from "../../assets/logos/cart.svg"
import "./Navbar.css"

const Navbar = () => {
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

    return (
        <header>
            <nav>
                <Link to="/" className="company-font"> ChaoKaiQi</Link>

                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                >

                    <motion.span variants={item} whileTap={{scale: .7}}><Link to="/">HOME</Link></motion.span>
                    <motion.span variants={item} whileTap={{scale: .7}}><Link to="/">CATAGORY</Link></motion.span>
                    <motion.span variants={item} whileTap={{scale: .7}}><Link to="/">ALL PRODUCTS</Link></motion.span>
                    <motion.span variants={item} whileTap={{scale: .7}}><Link to="/">ABOUT US</Link></motion.span>
                    <motion.span variants={item} whileTap={{scale: .7}}><Link to="/">CONTACT US</Link></motion.span>

                    <motion.span variants={item} whileTap={{scale: .7}}>
                        <Link to="/">
                            <img src={languageButton} alt="language changing button" className="logo" />
                        </Link>
                    </motion.span>

                    <motion.span variants={item} whileTap={{scale: .7}}>
                        <Link to="/">
                            <img src={cart} alt="cart page of products" className="logo" />
                        </Link>
                    </motion.span>

                </motion.div>

            </nav>
        </header>

    );
};

export default Navbar;