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
                        <a href="">Xiaomi, </a>
                        <a href="">Iphone, </a>
                        <a href="">Ipad, </a>
                        <a href="">Huawei, </a>
                        <a href="">Samsung, </a>
                        <a href="">Lenovo, </a>
                        <a href="">Oppo, </a>
                        <a href="">Vivo, </a>
                        <a href="">Oneplus, </a>
                        <a href="">Nokia, </a>
                        <a href="">Infinix, </a>
                    </p>
                </div>

                <div className="best-selling">
                    <h3 className="chinese-red font-20 font-normal mb-16">
                        Top Phone Covers
                    </h3>

                    <p className="top-phones">
                        <a href="">Xiaomi a23, </a>
                        <a href="">Iphone 8, </a>
                        <a href="">Ipad air 5, </a>
                        <a href="">Huawei p2, </a>
                        <a href="">Samsung s22, </a>
                        <a href="">Lenovo A33, </a>
                        <a href="">Oppo lx3, </a>
                        <a href="">Vivo a22, </a>
                        <a href="">Oneplus 9, </a>
                        <a href="">Nokia x5, </a>
                        <a href="">Infinix k9, </a>


                        <a href="">Xiaomi a23, </a>
                        <a href="">Iphone 8, </a>
                        <a href="">Ipad air 5, </a>
                        <a href="">Huawei p2, </a>
                        <a href="">Samsung s22, </a>
                        <a href="">Lenovo A33, </a>
                        <a href="">Oppo lx3, </a>
                        <a href="">Vivo a22, </a>
                        <a href="">Oneplus 9, </a>
                        <a href="">Nokia x5, </a>
                        <a href="">Infinix k9, </a>


                        <a href="">Xiaomi a23, </a>
                        <a href="">Iphone 8, </a>
                        <a href="">Ipad air 5, </a>
                        <a href="">Huawei p2, </a>
                        <a href="">Samsung s22, </a>
                        <a href="">Lenovo A33, </a>
                        <a href="">Oppo lx3, </a>
                        <a href="">Vivo a22, </a>
                        <a href="">Oneplus 9, </a>
                        <a href="">Nokia x5, </a>
                        <a href="">Infinix k9, </a>


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