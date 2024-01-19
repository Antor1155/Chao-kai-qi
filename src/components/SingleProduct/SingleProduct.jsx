import "./SingleProduct.css"
import { Link } from "react-router-dom";


// eslint-disable-next-line react/prop-types
const SingleProduct = ({ product }) => {

    // eslint-disable-next-line react/prop-types
    const { _id, productName, coverName, minimOrderQuantity, pricePerUnit, mainImage, colors } = product

    // eslint-disable-next-line react/prop-types
    const link = `/wholesale-tablet-cover/${productName?.replace(/ /g, "-")}/${_id}`

    return (
        <Link to={link}>
            <div className="singleProduct">
                <div className="image-container">
                    <img src={mainImage + ".jpg"} alt="phone case and cover of wholesale supplier" loading="lazy" />
                </div>
                <h3 className="font-16">{productName} Cover</h3>
                <p className="font-14 mb-8">{coverName}</p>

                <div className="color-options mb-8">
                    {Object.values(colors)?.map(color => (
                        <div key={color.colorValue} style={{ backgroundColor: color.colorValue }}></div>))}
                </div>

                <p className="font-14">Minimum Order quantity: {minimOrderQuantity} units</p>
                <p className="font-14 mb-16">Price / unit : {pricePerUnit} USD</p>

                <button className="fw-button">SEE THE COVER</button>

            </div>
        </Link>
    );
};

export default SingleProduct;