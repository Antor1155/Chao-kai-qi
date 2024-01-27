import "./FooterSection.css"

import FacebookIcon from "../../assets/logos/Facebook.svg"
import EmailIcon from "../../assets/logos/Email.svg"
import Phone from "../../assets/logos/Phone.svg"
import LinkedinIcon from "../../assets/logos/Linkedin.svg"
import wechatContact1 from "../../assets/logos/wechatContact1.webp"
import wechatContact2 from "../../assets/logos/wechatContact2.webp"
import { Link } from "react-router-dom"


const FooterSection = () => {
    return (
        <footer>
            <div className="double-line"></div>

            <div className="footer-info mb-16">
                <div>
                    <p className="font-20 chinese-red mb-16">Contact Us</p>
                    <a className="font-14" href="mailto:Chaokaiqi@outlook.com">Email : Chaokaiqi@outlook.com</a>
                    <br />
                    <a className="font-14" href="tel:+8613798587275">Whatsapp : +86 13798587275 </a>
                    <br />
                    <a className="font-14" href="tel:+8613028899446">Phone : +86 13028899446 </a>

                    <p className="font-20 chinese-red mt-16 mb-16"> Follow us : </p>
                    <div className="social-icons">
                        <a href="https://www.facebook.com/profile.php?id=61555580120146" rel="noreferrer" target="_blank">
                            <img src={FacebookIcon} alt="Facebook link of chao kai qi" loading="lazy" />
                        </a>

                        <a href="https://www.linkedin.com/company/99058679" rel="noreferrer" target="_blank">
                            <img src={LinkedinIcon} alt="Linkedin link of chao kai qi" loading="lazy" />
                        </a>

                        <a href="mailto:Chaokaiqi@outlook.com">
                            <img src={EmailIcon} alt="Email link of chao kai qi" loading="lazy" />
                        </a>

                        <a href="tel:+8613028899446">
                            <img src={Phone} alt="phone call link of chao kai qi" loading="lazy" />
                        </a>

                    </div>
                </div>

                <div className="policy">
                    <Link to="about-us" className="chinese-red font-20">About us</Link>
                    <Link to="privacy-policy" className="chinese-red font-20">Privacy policy</Link>
                    <Link to="shipping-policy" className="chinese-red font-20">Shipping policy</Link>
                    <Link to="return-policy" className="chinese-red font-20">Return policy</Link>
                    <Link to="payment-methods" className="chinese-red font-20">Payment methods</Link>
                </div>

                <div className="best-selling">
                    <h3 className="chinese-red font-20 font-normal mb-16">
                        Best selling catagory
                    </h3>

                    <p>
                        <Link to="/all-wholesale-tablet-covers/all">Xiaomi, </Link>
                        <Link to="/all-wholesale-tablet-covers/all">Iphone, </Link>
                        <Link to="/all-wholesale-tablet-covers/all">Ipad, </Link>
                        <Link to="/all-wholesale-tablet-covers/all">Huawei, </Link>
                        <Link to="/all-wholesale-tablet-covers/all">Samsung, </Link>
                        <Link to="/all-wholesale-tablet-covers/all">Lenovo, </Link>
                        <Link to="/all-wholesale-tablet-covers/all">Oppo, </Link>
                        <Link to="/all-wholesale-tablet-covers/all">Vivo, </Link>
                        <Link to="/all-wholesale-tablet-covers/all">Oneplus, </Link>
                        <Link to="/all-wholesale-tablet-covers/all">Nokia, </Link>
                        <Link to="/all-wholesale-tablet-covers/all">Infinix, </Link>
                    </p>
                </div>

                <div className="best-selling">
                    <h3 className="chinese-red font-20 font-normal mb-16">
                        Top Phone Covers
                    </h3>

                    <p className="top-phones">
                        <Link to="/all-wholesale-tablet-covers/all">ipad Mini 6, </Link>
                        <Link to="/all-wholesale-tablet-covers/all">iPad 9.7 Air1, </Link>
                        <Link to="/all-wholesale-tablet-covers/all">iPad 9.7 Air2, </Link>
                        <Link to="/all-wholesale-tablet-covers/all">iPad 10.2 2019, </Link>
                        <Link to="/all-wholesale-tablet-covers/all">iPad 10.2 2020, </Link>
                        <Link to="/all-wholesale-tablet-covers/all">iPad 10.2 2021, </Link>
                        <Link to="/all-wholesale-tablet-covers/all">iPad 10.9 2022, </Link>
                        <Link to="/all-wholesale-tablet-covers/all">ipad Pro 11, </Link>
                        <Link to="/all-wholesale-tablet-covers/all">ipad Air4, </Link>


                        <Link to="/all-wholesale-tablet-covers/all">ipad Air5, </Link>
                        <Link to="/all-wholesale-tablet-covers/all">ipad Pro 12.9 2022, </Link>
                        <Link to="/all-wholesale-tablet-covers/all">Mi 5, </Link>
                        <Link to="/all-wholesale-tablet-covers/all">Mi 5pro , </Link>
                        <Link to="/all-wholesale-tablet-covers/all">Nokia T20, </Link>
                        <Link to="/all-wholesale-tablet-covers/all">TAB S6 Lite 10.4, </Link>
                        <Link to="/all-wholesale-tablet-covers/all">TAB S6 Lite 2022, </Link>


                        <Link to="/all-wholesale-tablet-covers/all">TAB A7 Lite 8.7, </Link>
                        <Link to="/all-wholesale-tablet-covers/all">TAB A7 10.4 2020, </Link>
                        <Link to="/all-wholesale-tablet-covers/all">TAB S7 11, </Link>
                        <Link to="/all-wholesale-tablet-covers/all">TAB S8 11, </Link>
                        <Link to="/all-wholesale-tablet-covers/all">TAB S8Ultra 14.6, </Link>
                        <Link to="/all-wholesale-tablet-covers/all">Huawei Matepad 10.4, </Link>
                        <Link to="/all-wholesale-tablet-covers/all">OPPO Realme pad mini 8.7, </Link>
                        <Link to="/all-wholesale-tablet-covers/all">OPPO pad Air 10.3 2022, </Link>
                        <Link to="/all-wholesale-tablet-covers/all">HONOR 8 12 2022, </Link>
                        <Link to="/all-wholesale-tablet-covers/all">Mi 6 2023, </Link>


                    </p>
                </div>
            </div>

            <div className="footer-last">
                <div>
                    <img src={wechatContact1} alt="wechat contact qr code of chaokaiqi" loading="lazy" />
                    <img src={wechatContact2} alt="wechat contact qr code of chaokaiqi" loading="lazy" />
                </div>

                <div>
                    <h4 className="font-14 text-center font-normal mb-16">All rights reserved by @ <span className="chinese-red">Chao Kai Qi</span> Technology co. Ltd</h4>

                    <h4 className="font-14 text-center font-normal">Designed and developed by @
                        <a href="https://techvixo.com/"> Tech-vixo</a></h4>
                </div>
            </div>

        </footer >
    );
};

export default FooterSection;