import "./FooterSection.css"

import FacebookIcon from "../../assets/logos/Facebook.svg"
import InstagramIcon from "../../assets/logos/Instagram.svg"
import EmailIcon from "../../assets/logos/Email.svg"
import WechatIcon from "../../assets/logos/WeChat.svg"
import LinkedinIcon from "../../assets/logos/Linkedin.svg"
import { Link } from "react-router-dom"


const FooterSection = () => {
    return (
        <footer>
            <div className="double-line"></div>

            <div className="footer-info mb-gapping-tape">
                <div>
                    <p className="font-20 chinese-red mb-16">Contact Us</p>
                    <a className="font-14" href="mailto:Chaokaiqi@outlook.com">Email : Chaokaiqi@outlook.com</a>
                    <br />
                    <a className="font-14" href="tel:+8613798587275">Whatsapp : +86 13798587275 </a>
                    <br />
                    <a className="font-14" href="tel:+8613028899446">Phone : +86 13028899446 </a>

                    <p className="font-20 chinese-red mt-16 mb-16"> Follow us : </p>
                    <div className="social-icons">
                        <a href="" target="_blank">
                            <img src={FacebookIcon} alt="Facebook link of chao kai qi" loading="lazy" />
                        </a>

                        <a href="" target="_blank">
                            <img src={InstagramIcon} alt="Instagram link of chao kai qi" loading="lazy" />
                        </a>

                        <a href="" target="_blank">
                            <img src={LinkedinIcon} alt="Linkedin link of chao kai qi" loading="lazy" />
                        </a>

                        <a href="" target="_blank">
                            <img src={EmailIcon} alt="Email link of chao kai qi" loading="lazy" />
                        </a>

                        <a href="" target="_blank">
                            <img src={WechatIcon} alt="WeChat link of chao kai qi" loading="lazy" />
                        </a>

                        
                    </div>
                </div>

                <div className="policy">
                    <Link to="" className="chinese-red font-20">About us</Link>
                    <Link to="privacy-policy" className="chinese-red font-20">Privacy policy</Link>
                    <Link to="" className="chinese-red font-20">Shipping policy</Link>
                    <Link to="" className="chinese-red font-20">Return policy</Link>
                    <Link to="" className="chinese-red font-20">Payment methods</Link>
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

            <h4 className="font-14 text-center font-normal mb-16">All rights reserved by @ <span className="chinese-red">Chao Kai Qi</span> Technology co. Ltd</h4>      

            <h4 className="font-14 text-center font-normal">Designed and developed by @ 
            
            <a href="https://techvixo.com/">Tech-vixo</a></h4>            
        </footer>
    );
};

export default FooterSection;