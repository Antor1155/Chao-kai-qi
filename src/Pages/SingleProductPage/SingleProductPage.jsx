import { useEffect, useState } from "react";
import "./SingleProductPage.css"
import Slider from "react-slick";

const schemaData = {
    ProductName: "ipad mini 6",
    coverName: "Snap Rotate style",
    minimOrderQuantity: 10,
    pricePerUnit: 2.6,
    productSize: "200 * 150 * 13 cm",
    productGrossWeight: "198 g",
    imageArray: ["/ProductImages/example-type/IPAD1.jpg", "/ProductImages/example-type/IPAD2.jpg", "/ProductImages/example-type/IPAD3.jpg","/ProductImages/example-type/IPAD1.jpg"],

    mainImage: "/ProductImages/example-type/IPAD1.jpg",
    colors: {
        red: {
            colorValue: "#ff0000",
            imgLink: "/ProductImages/example-type/IPAD1.jpg"
        },
        green: {
            colorValue: "#097e7b",
            imgLink: "/ProductImages/example-type/IPAD1.jpg"
        },
        pink: {
            colorValue: "#f88cae",
            imgLink: "/ProductImages/example-type/IPAD1.jpg"
        }
    },

}

const SingleProductPage = () => {
    const [product, setProduct] = useState({})
    const [mainImage, setMainImage] = useState("")

    console.log(product)

    useEffect(() => {
        setProduct(schemaData)
        setMainImage(schemaData.mainImage)
    }, [])

    const slickSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
    }

    return (
        <>
            <section id="singleProductPage">

                <div className="image-section">
                    <img id="cover-main-image" src={mainImage} alt={product?.ProductName} />


                    <div className="slick-slider-div">
                        <Slider {...slickSettings}>

                            {product?.imageArray?.map((img, ind) =>
                                <img key={ind} src={img} alt={product?.ProductName} onClick={()=>setMainImage(img)}/>
                            )}
                        </Slider>
                    </div>
                </div>

                <div className="content-section">
                    product description
                </div>
            </section>
        </>
    );
};

export default SingleProductPage;