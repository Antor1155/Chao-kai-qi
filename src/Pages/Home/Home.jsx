import trusted from "../../assets/logos/Shield.svg";
import globalSupplier from "../../assets/logos/GlobalSupplier.svg";
import brands from "../../assets/brands/brands.png";
import banner from "../../assets/banner/banner.webp";
import fakeImg from "../../assets/banner/banner.png";


import "./Home.css"
import SingleProduct from "../../components/SingleProduct/SingleProduct";
import { useEffect, useState } from "react";
import {motion} from "framer-motion"

const Home = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        setProducts([10, 11, 12, 13, 14, 19, 15, 16, 17, 18, 20, 21])
    }, [])

    const handleInfoSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <>
            <section id="landing-screen">
                <div className="main-content">
                    <div className="title-container">
                        <h1>Global Wholesale <span className="chinese-red">supplier</span> <br />
                            Of Phone <span className="chinese-red">Case-Cover</span> <br />
                            From <span className="chinese-red">China</span>
                        </h1>

                        <div className="flex">
                            <div className="text-center">
                                <h2 className="font-20 mb-8">Since <br /> <span className="chinese-red">2012</span></h2>
                                <img className="logo" src={trusted} alt="truested supplier" />
                            </div>

                            <div className="text-center">
                                <h2 className="font-20 mb-8">Overseas supplier <br /> <span className="chinese-red">4M units</span></h2>
                                <img className="logo" src={globalSupplier} alt="Global supplier" />
                            </div>
                        </div>
                    </div>

                    <div style={{ height: "275px", borderRadius: "32px", overflow: "hidden" }}>

                        <img
                            style={{ width: "100%", height: "100%", objectFit: "fill" }}
                            src={banner} alt="" />
                    </div>
                </div>

                <div className="brands">
                    <h2 className="font-20 text-center">Brands <br /> We cover</h2>

                    <div className="brands-logo">
                        <img className="width-48" src={brands} alt="supported phone brands" />
                        <img className="width-48" src={brands} alt="supported phone brands" />
                        <img className="width-48" src={brands} alt="supported phone brands" />
                        <img className="width-48" src={brands} alt="supported phone brands" />
                        <img className="width-48" src={brands} alt="supported phone brands" />
                    </div>
                </div>
            </section>

            <section className="products-section">
                <div className="d-flex-between">
                    <h2>Our <span className="chinese-red">Top</span> Products</h2>
                    <h2>At best price</h2>
                </div>

                <div className="top-product-container">
                    {products.map((product, index) => <SingleProduct key={index} product={product}></SingleProduct>)}
                </div>
            </section>

            <section className="contact-section">
                <div className="d-flex-between">
                    <h2>Get ot know more about us</h2>
                    <h2 className="chinese-red">Special Service</h2>
                </div>

                <div className="content">
                    <div>
                        <img src={fakeImg} alt="productImage" />
                    </div>

                    <div className="form-and-info">
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

                        <div className="form-container">
                            <form onSubmit={handleInfoSubmit}>
                                <div>
                                    <label htmlFor="name">Name</label>
                                    <input id="name" name="name" type="text" />
                                </div>

                                <div>
                                    <label htmlFor="country">Country</label>
                                    <input id="country" name="country" type="text" />
                                </div>

                                <div>
                                    <label htmlFor="organization">Organization name</label>
                                    <input id="organization" name="organization" type="text" />
                                </div>

                                <div>
                                    <label htmlFor="email">email</label>
                                    <input id="email" name="email" type="text" />
                                </div>

                                <div>
                                    <label htmlFor="note">Special note</label>
                                    <textarea name="note" id="note" cols="22" rows="4"></textarea>
                                </div>

                                <motion.button  
                                    type="submit" 
                                    className="fw-button"
                                    whileTap={{scale: 0.95}}
                                    >SUBMIT</motion.button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default Home;