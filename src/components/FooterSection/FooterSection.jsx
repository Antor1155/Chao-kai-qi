import "./FooterSection.css"

import FacebookIcon from "../../assets/logos/Facebook.svg"
import InstagramIcon from "../../assets/logos/Instagram.svg"
import EmailIcon from "../../assets/logos/Email.svg"
import WechatIcon from "../../assets/logos/WeChat.svg"
const FooterSection = () => {
    return (
        <footer>
            <div className="double-line"></div>

            <div>
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
                            <img src={EmailIcon} alt="Email link of chao kai qi" loading="lazy" />
                        </a>
                        <a href="" target="_blank">
                            <img src={WechatIcon} alt="WeChat link of chao kai qi" loading="lazy" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterSection;