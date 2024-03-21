import exImg from "../../assets/companyImage/companyImg15.jpg"
import usaIcon from "../../assets/logos/Usa.svg"
import globeIcon from "../../assets/logos/Globe.svg"

import { useTranslation } from "react-i18next"

import "./ShippingPolicy.css"
import { Helmet } from "react-helmet"

const ShippingPolicy = () => {
    const { t } = useTranslation()

    return (
        <section className="shipping-policy">
            <Helmet>
                <title>Shopping Policy - ChaoKaiQi | Wholesale Tablet Cover Seller</title>
                <meta name="description" content="Explore ChaoKaiQi's Shopping Policy to understand our guidelines and terms related to purchasing tablet covers from us. Learn about our shipping, payment, and return procedures to ensure a smooth shopping experience. Shop with confidence knowing you're supported by our policies." />
            </Helmet>

            <h1>{t("shipping.title")}</h1>
            <img className="main-img" src={exImg} alt="Shipping policy image of ChaoKaiQi" />

            <div className="shipping-info">
                <div>
                    <img src={usaIcon} alt="shipping to USA" />
                    <h2>{t("shipping.forU")} <br />{t("shipping.bDays")} </h2>
                </div>
                <div>
                    <img src={globeIcon} alt="global shipping" />
                    <h2>{t("shipping.forG")} <br />{t("shipping.bDG")}</h2>
                </div>
            </div>

            <small> <span>{t("shipping.note")}</span> {t("shipping.noteP")}</small>

            <p>{t("shipping.lastP")}</p>

        </section>
    );
};

export default ShippingPolicy;