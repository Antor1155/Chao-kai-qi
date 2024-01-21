import exImg from "../../assets/companyImage/companyImg15.jpg"
import usaIcon from "../../assets/logos/Usa.svg"
import globeIcon from "../../assets/logos/Globe.svg"

import "./ShippingPolicy.css"

const ShippingPolicy = () => {
    return (
        <section className="shipping-policy">
            <h1>Shipping Policy of ChaoKaiQi</h1>
            <img className="main-img" src={exImg} alt="Shipping policy image of ChaoKaiQi" />

            <div className="shipping-info">
                <div>
                    <img src={usaIcon} alt="shipping to USA" />
                    <h2>For US orders: <br />6-15 business days </h2>
                </div>
                <div>
                    <img src={globeIcon} alt="global shipping" />
                    <h2>For non-US orders: <br />5-30 business days</h2>
                </div>
            </div>

            <small> <span>Note: </span> The delivery time will vary a lot from country to country. In short, the shipping time
                alone could be around,</small>

            <p>Delivery time is not guaranteed for Standard Shipping as there are a lot of factors
                affecting its speed, thus we would suggest Express Shipping if there is a date that you
                would like to meet. The above are estimated time provided by the postal service and do
                not include the processing time of the Customs in the destination country. In some
                cases, the local Customs office of your country may require additional documents and
                time to have your package cleared, and this may also cause further delay on the
                delivery.</p>

        </section>
    );
};

export default ShippingPolicy;