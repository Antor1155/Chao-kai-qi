import trusted from "../../assets/logos/Shield.svg";
import globalSupplier from "../../assets/logos/GlobalSupplier.svg";
import brands from "../../assets/brands/brands.png";

import banner from "../../assets/banner/banner.webp";
import banner2 from "../../assets/banner/banner2.jpg"
import banner3 from "../../assets/banner/banner3.jpg"

import fakeImg from "../../assets/banner/banner.png";
import fakeProductImg1 from "../../assets/ProductImage/fakeProductImg.webp"
import fakeProductImg2 from "../../assets/ProductImage/fakeProductImg2.png"
import fakeProductImg3 from "../../assets/ProductImage/fakeProductImg3.webp"

import chineseHouse from "../../assets/decoration/chinese-house.png";

import companyImg1 from "../../assets/companyImage/companyImg1.jpg"
import companyImg2 from "../../assets/companyImage/companyImg2.jpeg"
import companyImg3 from "../../assets/companyImage/companyImg3.jpg"
import companyImg4 from "../../assets/companyImage/companyImg4.jpeg"
import companyImg5 from "../../assets/companyImage/companyImg5.jpeg"


import "./Home.css"
import SingleProduct from "../../components/SingleProduct/SingleProduct";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";

const Home = () => {
    const [products, setProducts] = useState([])

    const sliderSetting = {
        dots: false,
        infinite: true,
        speed: 900,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000,
        adaptiveHeight: true,
        pauseOnHover: false,
    }

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

                        <Slider className="slider-main" {...sliderSetting}>
                            <img
                                style={{ width: "100%", height: "100%", objectFit: "fill" }}
                                src={banner} alt=""
                            />
                            <img
                                style={{ width: "100%", height: "100%", objectFit: "fill" }}
                                src={banner2} alt=""
                            />
                            <img
                                style={{ width: "100%", height: "100%", objectFit: "fill" }}
                                src={banner3} alt=""
                            />
                        </Slider>
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

                    <div className="photo-slider">
                        <Slider {...sliderSetting}>
                            <img src={fakeImg} alt="productImage" loading="lazy" />
                            <img src={fakeProductImg1} alt="productImage" loading="lazy" />
                            <img src={fakeProductImg2} alt="productImage" loading="lazy" />
                            <img src={fakeProductImg3} alt="productImage" loading="lazy" />
                        </Slider>
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
                                    whileTap={{ scale: 0.95 }}
                                >SUBMIT</motion.button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <section className="about-us mb-gapping-tape">
                <h2 className="company-font text-center font-bold">
                    About <br />
                    ChaoKaiQi
                </h2>

                <div className="content mb-32">
                    <div className="image-container">
                        <img src={chineseHouse} alt="chinese house decoration" loading="lazy" />
                    </div>

                    <div className="info">
                        <h3 className="font-24 mb-16">
                            <span className="chinese-red">
                                Chao Kai Qi
                            </span> : Globally Trusted Name
                        </h3>
                        <p className="mb-16"><span className="chinese-red">Name </span>
                            : Shenzen Chao kai Qi Technology Co. Ltd
                        </p>

                        <p className="mb-16">
                            <span className="chinese-red">Email</span>
                            : <a href="mailto:Chaokaiqi@outlook.com">Chaokaiqi@outlook.com</a>
                        </p>

                        <p className="mb-16">
                            <span className="chinese-red">
                                Phone
                            </span>
                            : <a href="tel:+86 13798587275">+86 13798587275 (WhatsApp)</a>
                        </p>

                        <p className="mb-16">
                            <span className="chinese-red">
                                Address
                            </span>
                            : 3rd floor, No 11 Furong road, Xirong industry area, Bao’an district,
                            Shenzen, China.
                        </p>

                        <p>
                            Welcome to Chao Kai Qi Technology Co. Ltd, a trusted global wholesaler for premium phone cases and quality cover. We take pride in delivering innovative, durable, and stylish products to phone case sellers worldwide. Based in Shenzen, China, our mission is to redefine the market with quality, affordability, and unwavering trust. Join us in shaping the future of phone accessories.
                        </p>

                    </div>
                </div>

                <div className="company-images">
                    <img src={companyImg3} alt="Chaokaiqi compnay image" loading="lazy" />
                    <img src={companyImg1} alt="Chaokaiqi compnay image" loading="lazy" />
                    <img src={companyImg2} alt="Chaokaiqi compnay image" loading="lazy" />
                    <img src={companyImg4} alt="Chaokaiqi compnay image" loading="lazy" />
                    <img src={companyImg5} alt="Chaokaiqi compnay image" loading="lazy" />
                </div>
            </section>
        </>
    );
};

export default Home;