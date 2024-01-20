import trusted from "../../assets/logos/Shield.svg";
import globalSupplier from "../../assets/logos/GlobalSupplier.svg";

import banner from "../../assets/banner/banner.webp";
import banner2 from "../../assets/banner/banner2.jpg";
import banner3 from "../../assets/banner/banner3.jpg";

import mobileBanner1 from "../../assets/banner/mobileBanner1.avif"
import mobileBanner2 from "../../assets/banner/mobileBanner2.webp"

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

import apple from "../../assets/compnayLogo/apple.svg"
import asus from "../../assets/compnayLogo/asus.svg"
import blackberry from "../../assets/compnayLogo/blackberry.svg"
import htc from "../../assets/compnayLogo/htc.svg"
import huawei from "../../assets/compnayLogo/huawei.svg"
import lenovo from "../../assets/compnayLogo/lenovo.svg"
import lg from "../../assets/compnayLogo/lg.svg"
import motorola from "../../assets/compnayLogo/motorola.svg"
import nokia from "../../assets/compnayLogo/nokia.svg"
import samsung from "../../assets/compnayLogo/samsung.svg"
import sony from "../../assets/compnayLogo/sony.svg"


import "./Home.css"
import SingleProduct from "../../components/SingleProduct/SingleProduct";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import { toast } from "react-toastify";
import instance from "../../axiosInstance";

const Home = () => {
    const [products, setProducts] = useState([])
    const [mobileScreen, setMobileScreen] = useState(false)

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

    const branSliderSetting = {
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        vertical: !mobileScreen,
        verticalSwiping: !mobileScreen,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 500,

    }

    useEffect(() => {
        instance.get("/random-products/12").then(data =>{
            setProducts(data.data)
        }).catch(error=>{
            console.log(error)
        })


        // checking the device is phone or desktop 
        const mq = window.matchMedia("(max-width: 768px)");

        if(mq.matches){
            setMobileScreen(true)
        }

    }, [])

    const handleInfoSubmit = (e) => {
        e.preventDefault()
        e.target.reset()

        toast("Thanks for your input. We will get back to you soon ! Hope you have a good day.")
    }

    const handleContactNow = () =>{
        document.getElementById("contact-section").scrollIntoView({behavior: "smooth"})
    }

    return (
        <>
            <motion.button whileHover={{scale: "1.05"}} whileTap={{scale: .95}} id="contact-now" onClick={handleContactNow}>
               Contact Now !
            </motion.button>

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

                    <div style={{ height: mobileScreen ? "" : "275px", borderRadius: "32px", overflow: "hidden" }}>

                        <Slider className="slider-main" {...sliderSetting}>
                            <img
                                style={{ width: "100%", height: "100%", objectFit: "fill" }}
                                src={mobileScreen ? mobileBanner1 : banner} alt=""
                            />
                            <img
                                style={{ width: "100%", height: "100%", objectFit: "fill" }}
                                src={mobileScreen ? mobileBanner2 : banner2} alt=""
                            />
                            <img
                                style={{ width: "100%", height: "100%", objectFit: "fill" }}
                                src={mobileScreen ? mobileBanner1 : banner3} alt=""
                            />
                        </Slider>
                    </div>
                </div>

                <div className="brands">
                    <h2 className="font-20 text-center mb-32">Brands <br /> We cover</h2>

                    <div className="brands-logo">
                        <Slider {...branSliderSetting}>
                            <img src={apple} alt="apple phone brands" />
                            <img src={asus} alt="supported phone brands" />
                            <img src={blackberry} alt="supported phone brands" />
                            <img src={htc} alt="supported phone brands" />
                            <img src={huawei} alt="supported phone brands" />
                            <img src={lenovo} alt="supported phone brands" />
                            <img src={lg} alt="supported phone brands" />
                            <img src={motorola} alt="supported phone brands" />
                            <img src={nokia} alt="supported phone brands" />
                            <img src={samsung} alt="supported phone brands" />
                            <img src={sony} alt="supported phone brands" />
                        </Slider>
                    </div>
                </div>
            </section>

            <section className="products-section">
                <div className="d-flex-between">
                    <h2>Our <span className="chinese-red">Top</span> Products</h2>
                    <h2>At best price</h2>
                </div>

                <div className="top-product-container">
                    {products.map((product) => <SingleProduct key={product._id} product={product}></SingleProduct>)}
                </div>
            </section>

            <section className="contact-section" id="contact-section">
                <div className="d-flex-between">
                    <h2>Get to know more about us</h2>
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
                                    <label htmlFor="name">Name *</label>
                                    <input id="name" name="name" type="text" required />
                                </div>

                                <div>
                                    <label htmlFor="country">Country *</label>
                                    <input id="country" name="country" type="text" required/>
                                </div>

                                <div>
                                    <label htmlFor="organization">Organization name *</label>
                                    <input id="organization" name="organization" type="text" required/>
                                </div>

                                <div>
                                    <label htmlFor="email">Email *</label>
                                    <input id="email" name="email" type="text" required/>
                                </div>

                                <div>
                                    <label htmlFor="mobile">Phone number *</label>
                                    <input id="mobile" name="mobile" type="text" required/>
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