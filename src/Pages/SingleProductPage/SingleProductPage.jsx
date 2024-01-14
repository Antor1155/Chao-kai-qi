import { useEffect, useState } from "react";
import "./SingleProductPage.css"

const SingleProductPage = () => {
    const [product, setProduct] = useState({})

    console.log(product)

    useEffect(() => {
        const schemaData = {
            ProductName : "ipad mini 6",
            coverName: "Snap Rotate style",
            minimOrderQuantity: 10,
            pricePerUnit: 2.6,
            productSize: "200 * 150 * 13 cm",
            productGrossWeight: "198 g",
            imageArray: ["/ProductImages/example-type/IPAD1.jpg","/ProductImages/example-type/IPAD2.jpg","/ProductImages/example-type/IPAD3.jpg"],
            colors: {
                red:{
                    colorValue: "#ff0000",
                    imgLink: "/ProductImages/example-type/IPAD1.jpg"
                },
                green:{
                    colorValue: "#097e7b",
                    imgLink: "/ProductImages/example-type/IPAD1.jpg"
                },
                pink:{
                    colorValue:"#f88cae",
                    imgLink:"/ProductImages/example-type/IPAD1.jpg"
                }
            },

        }

        setProduct(schemaData)
    }, [])
    
    return (
        <>
            <section id="singleProductPage">
                <div className="image-section">
                    <img src={product?.imageArray ? product?.imageArray[0] : " "} alt="product  name" />
                </div>

                <div>
                    product description
                </div>
            </section>
        </>
    );
};

export default SingleProductPage;