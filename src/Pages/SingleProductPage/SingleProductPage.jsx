import { useEffect, useState } from "react";
import "./SingleProductPage.css"
import Slider from "react-slick";
import { motion } from "framer-motion"

import star from "../../assets/logos/Star.svg"

import Alipay from "../../assets/logos/Alipay.svg"
import WeChat from "../../assets/logos/WeChat.svg"
import Visa from "../../assets/logos/Visa.svg"
import MasterCard from "../../assets/logos/MasterCard.svg"
import AmericanExpress from "../../assets/logos/AmericanExpress.svg"

import truck from "../../assets/logos/truck.svg"
import plane from "../../assets/logos/plane.svg"
import ship from "../../assets/logos/ship.svg"
import globeBlack from "../../assets/logos/globeBlack.svg"
import box from "../../assets/logos/Box.svg"

import chaoKaiQi from "../../assets/compnayLogo/chaoKaiQi.svg"



const schemaData = {
    ProductName: "ipad mini 6",
    coverName: "Snap Rotate style",
    minimOrderQuantity: 10,
    pricePerUnit: 2.6,
    productSize: "200 * 150 * 13 cm",
    productGrossWeight: "198 g",
    imageArray: ["/ProductImages/example-type/IPAD1.jpg", "/ProductImages/example-type/IPAD2.jpg", "/ProductImages/example-type/IPAD3.jpg", "/ProductImages/example-type/IPAD1.jpg"],

    mainImage: "/ProductImages/example-type/IPAD1.jpg",
    colors: {
        roseGold: {
            name: "rose gold",
            colorValue: "#B78E89",
            imgLink: "/ProductImages/example-type/IPAD1.jpg"
        },
        navy: {
            name: "navy",
            colorValue: "#3B3B5F",
            imgLink: "/ProductImages/example-type/IPAD2.jpg"
        },
        black: {
            name: "black",
            colorValue: "#303030",
            imgLink: "/ProductImages/example-type/IPAD3.jpg"
        }
    },

}

const SingleProductPage = () => {
    const [product, setProduct] = useState({})
    const [mainImage, setMainImage] = useState("")


    // this section for order when add to curt 
    const [orderAmount, setOrderAmount] = useState()
    const [selectedColor, setSelectedColor] = useState({
        name: "all",
        colorValue: "",
        imgLink: ""
    })


    useEffect(() => {
        setProduct(schemaData)
        setMainImage(schemaData.mainImage)
        setOrderAmount(schemaData.minimOrderQuantity)

    }, [])

    const slickSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
    }

    const handleSelectedColor = (val) => {
        if (val.name === selectedColor.name) {
            setSelectedColor({
                name: "all",
                colorValue: "",
                imgLink: ""
            })
            setMainImage(product?.mainImage)
        } else {
            setSelectedColor(val)
            setMainImage(val?.imgLink)
        }
    }

    const handleAddToCard = (e) => {
        e.preventDefault()
        const orderQuantity = e.target.orderQuantity.value

        if (orderQuantity) {
            setOrderAmount(parseInt(orderQuantity))
        }

        e.target.reset()
    }

    console.log(orderAmount, typeof (orderAmount))

    return (
        <>
            <section id="singleProductPage">

                <div className="image-section">
                    <img id="cover-main-image" src={mainImage} alt={product?.ProductName} />


                    <div className="slick-slider-div">
                        <Slider {...slickSettings}>

                            {product?.imageArray?.map((img, ind) =>
                                <img key={ind} src={img} alt={product?.ProductName} onClick={() => setMainImage(img)} />
                            )}
                        </Slider>
                    </div>
                </div>

                <div className="content-section">
                    <h1 className="mb-16"><span className="chinese-red">{product?.ProductName}</span> cover</h1>

                    <h2 className="font-24 mb-4">$ {product?.pricePerUnit} USD <span className="title">per unit</span></h2>

                    <p className="review-stars mb-16">
                        <img src={star} alt="client review star" />
                        <img src={star} alt="client review star" />
                        <img src={star} alt="client review star" />
                        <img src={star} alt="client review star" />
                        <img src={star} alt="client review star" />
                    </p>

                    <h2 className="font-24 mb-16"> <span className="title">Cover name</span> : {product?.coverName}</h2>

                    <h2 className="font-24 mb-16"> <span className="title">Product size</span> : {product?.productSize}</h2>

                    <h2 className="font-24 mb-16"> <span className="title">Gross weight</span> : {product?.productGrossWeight}</h2>

                    <h2 className="font-24 mb-32"> <span className="title">Minimum order quantity</span> : {product?.minimOrderQuantity} units</h2>

                    <h2 className="company-font font-bold font-32 mb-8">Colors</h2>

                    <div className="color-buttons mb-32">
                        {
                            product?.colors ?

                                Object.values(product?.colors).map((val, ind) =>
                                    <motion.button
                                        key={ind}
                                        whileTap={{ scale: 0.9 }}
                                        whileHover={{ scale: 1.1 }}
                                        style={
                                            {
                                                background: val?.colorValue,
                                                border: (val.name === selectedColor.name) ? "5px solid white" : "1px solid",
                                            }
                                        }

                                        onClick={() => handleSelectedColor(val)}
                                    ></motion.button>
                                )
                                :
                                ""
                        }
                    </div>

                    <form onSubmit={handleAddToCard} className="order-amount-form mb-double-gapping-tape">
                        <label className="font-24" htmlFor="orderQuantity">
                            <span className="title">
                                Order amount
                            </span>
                        </label>

                        <input type="number" name="orderQuantity" id="orderQuantity" min={product?.minimOrderQuantity} placeholder={"min amount : " + product?.minimOrderQuantity} />

                        <motion.button
                            className="fw-button"
                            type="submit"
                            whileTap={{ scale: 0.95 }}
                        >
                            ADD TO CART
                        </motion.button>
                    </form>

                    <div className="card-img mb-16">
                        <img src={Visa} alt="Visa pay" />
                        <img src={MasterCard} alt="MasterCard pay" />
                        <img src={AmericanExpress} alt="AmericanExpress pay" />
                        <img src={Alipay} alt="Alipay pay" />
                        <img src={WeChat} alt="wechat pay" />
                    </div>

                    <motion.p
                        className="font-14 mb-gapping-tape"
                        initial={{opacity: 0}}
                        whileInView={{opacity:1}}
                        transition={{delay:.5, duration:1}}
                    >
                        We accept all major bank cards accepted by Chinese banks along with AliPay and WeChat Pay
                    </motion.p>


                    <div className="card-img mb-16">
                        <img src={globeBlack} alt="Global shipment" />
                        <img src={box} alt="shipping box" />
                        <img src={truck} alt="shipment by truck" />
                        <img src={ship} alt="shipment by ship" />
                        <img src={plane} alt="shipment by plane" />
                    </div>

                    <motion.p
                        className="font-14 mb-gapping-tape"
                        initial={{opacity: 0}}
                        whileInView={{opacity:1}}
                        transition={{delay:.5, duration:1}}
                    >
                        We ship product globally with proper care and make arrangements accordingly
                    </motion.p>


                    <div className="company-info">
                        <img src={chaoKaiQi} alt="chaokaiQi | ChaoKaiQi company logo" />

                        <h2 className="font-24"> <span className="company-font">ChaoKaiQi</span> <br />
                            Globally trusted name
                        </h2>
                    </div>


                </div>
            </section>
        </>
    );
};

export default SingleProductPage;