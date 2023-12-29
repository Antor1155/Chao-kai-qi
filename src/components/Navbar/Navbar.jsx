import { Link } from "react-router-dom";
import languageButton from "../../assets/logos/language-options.svg";
import cart from "../../assets/logos/cart.svg"
import "./Navbar.css"

const Navbar = () => {
    return (
        <header>
            <nav>
                <Link to="/" className="company-font"> ChaoKaiQi</Link>

                <div>
                    <Link to="/">HOME</Link>
                    <Link to="/">CATAGORY</Link>
                    <Link to="/">ALL PRODUCTS</Link>
                    <Link to="/">ABOUT US</Link>
                    <Link to="/">CONTACT US</Link>

                    <Link to="/">
                        <img src={languageButton} alt="language changing button" className="logo" />
                    </Link>

                    <Link to="/">
                        <img src={cart} alt="cart page of products" className="logo" />
                    </Link>
                </div>
            </nav>
        </header>

    );
};

export default Navbar;