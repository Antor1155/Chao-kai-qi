import "./SingleProduct.css"
import exampleCover from "../../assets/ProductImage/example-cover.jpeg"
import { useNavigate } from "react-router-dom";




// eslint-disable-next-line react/prop-types
const SingleProduct = ({ product }) => {
    const navigate = useNavigate()



    const handleNavigate = () =>{
        navigate(`/wholesale-tablet-cover/${"iphone mini 6".replace(/ /g,"-")}/${product}`)
    }

    return (
        <div className="singleProduct" onClick={handleNavigate}>
            <div className="image-container">
                <img src={exampleCover} alt="phone case and cover of wholesale supplier" loading="lazy" />
            </div>
            <h3 className="font-16">iPhone Mini 6 Cover</h3>
            <p className="font-14 mb-8">Snap rotate style</p>

            <div className="color-options mb-8">
                <div style={{ backgroundColor: "#000000" }}></div>
                <div style={{ backgroundColor: "#EFF9FF" }}></div>
                <div style={{ backgroundColor: "#00CA45" }}></div>
                <div style={{ backgroundColor: "#FF27A9" }}></div>
                <div style={{ backgroundColor: "#D9D9D9" }}></div>
                <div style={{ backgroundColor: "#CE00E0" }}></div>
            </div>

            <p className="font-14">Minimum Order quantity: {product} units</p>
            <p className="font-14 mb-16">Price / unit : 2.6 USD</p>

            <button className="fw-button">SEE THE COVER</button>

        </div>
    );
};

export default SingleProduct;