import companyImg1 from "../../assets/companyImage/companyImg1.jpg"
import companyImg2 from "../../assets/companyImage/companyImg2.jpg"
import companyImg4 from "../../assets/companyImage/companyImg4.jpg"
import companyImg5 from "../../assets/companyImage/companyImg5.jpg"
import companyImg6 from "../../assets/companyImage/companyImg6.jpg"
import companyImg7 from "../../assets/companyImage/companyImg7.jpg"
import companyImg8 from "../../assets/companyImage/companyImg8.jpg"
import companyImg9 from "../../assets/companyImage/companyImg9.jpg"
import companyImg11 from "../../assets/companyImage/companyImg11.jpg"
import companyImg12 from "../../assets/companyImage/companyImg12.jpg"
import companyImg13 from "../../assets/companyImage/companyImg13.jpg"
import companyImg14 from "../../assets/companyImage/companyImg14.jpg"


import Facebook from "../../assets/logos/Facebook.svg"
import Instagram from "../../assets/logos/Instagram.svg"
import LinkedIn from "../../assets/logos/LinkedIn.svg"
import Email from "../../assets/logos/Email.svg"
import Phone from "../../assets/logos/Phone.svg"
import WeChat from "../../assets/logos/WeChat.svg"

import "./AboutUs.css"
import Slider from "react-slick";
import { useEffect, useState } from "react"

const AboutUs = () => {
    const [mobileScreen, setMobileScreen] = useState(false)

    const sliderSetting = {
        dots: false,
        infinite: true,
        speed: 900,
        slidesToShow: mobileScreen ? 2 : 5,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        adaptiveHeight: true,
        pauseOnHover: false,
        rtl: true,
    }

    useEffect(()=>{
        const mq = window.matchMedia("(max-width: 768px)");

        if(mq.matches){
            setMobileScreen(true)
        }

    }, [])


    return (
        <>
            <h1 className="company-font text-center mb-gapping-tape">About <br />ChaoKaiQi</h1>

            <section className="about-first mb-gapping-tape">
                <img src={companyImg4} alt="Chao Kai Qi company Image" />

                <div>
                    <h2 className="mb-16">
                        <span className="chinese-red">Chao Kai Qi :</span> <br />
                        <span className="font-24">
                            A globally trusted name for <br />
                            Wholesale phone case-cover supplier
                        </span>
                    </h2>

                    <p>Welcome to Chao Kai Qi Technology Co. Ltd, your trusted global wholesaler for premium phone cases and quality covers. Based in Shenzen, China, we pride ourselves on delivering innovative, durable, and stylish products to phone case sellers worldwide. Our mission is simple: to redefine the market with a perfect blend of quality, affordability, and unwavering trust. At Chao Kai Qi, we are not just providing phone accessories; we are shaping the future of the industry. Explore our collection and experience the difference. For inquiries, contact us at <a href="mailto:Chaokaiqi@outlook.com">Chaokaiqi@outlook.com</a> or <a href="tel:+86 13798587275">+86 13798587275</a> (WhatsApp). Let&#39;s redefine phone case excellence together.</p>
                </div>
            </section>

            <section className="contact-and-info mb-double-gapping-tape">

                <div className="contact-icons">
                    <a href="">
                        <img src={Facebook} alt="ChaokaiQi Facebook link" loading="lazy" />
                    </a>

                    <a href="">
                        <img src={Instagram} alt="ChaokaiQi Instagram link"  loading="lazy"/>
                    </a>

                    <a href="">
                        <img src={LinkedIn} alt="ChaokaiQi LinkedIn link" loading="lazy" />
                    </a>

                    <a href="">
                        <img src={WeChat} alt="ChaokaiQi Wechat link" loading="lazy"/>
                    </a>

                    <a href="">
                        <img src={Email} alt="ChaokaiQi Email link" loading="lazy"/>
                    </a>

                    <a href="">
                        <img src={Phone} alt="ChaokaiQi Phone link" loading="lazy"/>
                    </a>
                </div>

                <div>
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

                </div>
            </section>

            <section className="our-story mb-double-gapping-tape">
                <h2 className="company-font text-center mb-gapping-tape">Our Story</h2>

                <img className="mb-32" src={companyImg1} alt="Chao Kai Qi compnay story image" loading="lazy"/>

                <p className="text-center">Chao Kai Qi began with a vision: to offer innovative and stylish phone case covers at competitive prices. Our journey started in 2012 when a team of passionate individuals came together with a shared commitment to quality and customer satisfaction.</p>
            </section>

            <section className="mb-double-gapping-tape">
                <h2 className="company-font text-center mb-gapping-tape">What Set Us Apart</h2>

                <p className="text-center mb-32">At <span className="chinese-red">Chao Kai Qi </span>, we take pride in our commitment to excellence. Here&#39;s what sets us apart</p>

                <div className="mission-cards mb-32">
                    <div className="mission-card">
                        <img src={companyImg8} alt="chao kai qi compnay image" loading="lazy"/>
                        <h2 className="font-20 chinese-red">Quality Assurance</h2>
                        <p>We believe in delivering products that stand the test of time. Each phone case cover undergoes rigorous quality checks to ensure durability and style.</p>
                    </div>

                    <div className="mission-card">
                        <img src={companyImg1} alt="chao kai qi compnay image" loading="lazy"/>
                        <h2 className="font-20 chinese-red">Wide Selection:</h2>
                        <p>Explore our extensive catalog featuring the latest trends and timeless classics. We strive to offer a diverse range of phone case covers to meet the unique preferences of our customers.</p>
                    </div>

                    <div className="mission-card">
                        <img src={companyImg6} alt="chao kai qi compnay image" loading="lazy"/>
                        <h2 className="font-20 chinese-red">Competitive Pricing:</h2>
                        <p>We understand the importance of affordability for businesses. Our pricing is competitive without compromising on quality, making us a cost-effective choice for your wholesale needs.</p>
                    </div>
                </div>

                <p className="text-center mobile-text-justify">Our mission is to be your go-to partner for wholesale phone case covers, providing top-notch products and exceptional service. We aim to build lasting relationships with our clients by consistently exceeding expectations.</p>
            </section>

            <section className="image-sliders mb-double-gapping-tape">
                <Slider {...sliderSetting}>
                    <img src={companyImg12} alt="Chao kai qi compnay image" loading="lazy"/>
                    <img src={companyImg2} alt="Chao kai qi compnay image" loading="lazy"/>
                    <img src={companyImg13} alt="Chao kai qi compnay image" loading="lazy"/>
                    <img src={companyImg4} alt="Chao kai qi compnay image" loading="lazy"/>
                    <img src={companyImg5} alt="Chao kai qi compnay image" loading="lazy"/>
                    <img src={companyImg6} alt="Chao kai qi compnay image" loading="lazy"/>
                </Slider>

                <Slider {...{ ...sliderSetting, rtl: false }}>
                    <img src={companyImg7} alt="Chao kai qi compnay image" loading="lazy"/>
                    <img src={companyImg14} alt="Chao kai qi compnay image" loading="lazy"/>
                    <img src={companyImg9} alt="Chao kai qi compnay image" loading="lazy"/>
                    <img src={companyImg6} alt="Chao kai qi compnay image" loading="lazy"/>
                    <img src={companyImg11} alt="Chao kai qi compnay image" loading="lazy"/>
                    <img src={companyImg12} alt="Chao kai qi compnay image" loading="lazy"/>
                </Slider>
            </section>

            <p className="text-center company-font font-24 font-bold">
                Thank you for  choosing  <span className="chinese-red">Chao Kai Qi</span> – where style meets functionality!
            </p>
        </>
    );
};

export default AboutUs;  