import { useEffect, useState } from "react";
import SingleProduct from "../../components/SingleProduct/SingleProduct";
import { motion } from "framer-motion"

import "./AllTabsCover.css"

const AllTabsCover = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        setProducts([5, 2, 5, 33, 22, 55, 22, 11, 44])
    }, [])

    return (
        <>
            <h1 className="mb-gapping-tape align-center"> <span className="chinese-red">Ipad air 2020</span> tablet covers</h1>

            <section className="all-products-section">
                <div className="filter-catagories">

                    <div className="single-filter">
                        <h2 >Iphone</h2>

                        <p>
                            <input type="checkbox" name="ipad 2022" id="ipad 2020" />
                            <label htmlFor="ipad 2022"> Ipad 2022</label>
                        </p>
                        <p>
                            <input type="checkbox" name="ipad 2022" id="ipad 2020" />
                            <label htmlFor="ipad 2022"> Ipad 2022</label>
                        </p>
                        <p>
                            <input type="checkbox" name="ipad 2022" id="ipad 2020" />
                            <label htmlFor="ipad 2022"> Ipad 2022</label>
                        </p>
                        <p>
                            <input type="checkbox" name="ipad 2022" id="ipad 2020" />
                            <label htmlFor="ipad 2022"> Ipad 2022</label>
                        </p>
                    </div>

                    <div className="single-filter">
                        <h2 >Samsung</h2>

                        <p>
                            <input type="checkbox" name="ipad 2022" id="ipad 2020" />
                            <label htmlFor="ipad 2022"> S8 ultra</label>
                        </p>
                        <p>
                            <input type="checkbox" name="ipad 2022" id="ipad 2020" />
                            <label htmlFor="ipad 2022"> S6 ultra</label>
                        </p>
                        <p>
                            <input type="checkbox" name="ipad 2022" id="ipad 2020" />
                            <label htmlFor="ipad 2022">Tab A8</label>
                        </p>
                        <p>
                            <input type="checkbox" name="ipad 2022" id="ipad 2020" />
                            <label htmlFor="ipad 2022"> S9 plus</label>
                        </p>
                    </div>


                    <div className="single-filter">
                        <h2 className="company-font font-bold">Cover style</h2>

                        <p>
                            <input type="checkbox" name="ipad 2022" id="ipad 2020" />
                            <label htmlFor="ipad 2022"> Magnetic</label>
                        </p>
                        <p>
                            <input type="checkbox" name="ipad 2022" id="ipad 2020" />
                            <label htmlFor="ipad 2022"> Striped</label>
                        </p>
                        <p>
                            <input type="checkbox" name="ipad 2022" id="ipad 2020" />
                            <label htmlFor="ipad 2022"> Special</label>
                        </p>
                        <p>
                            <input type="checkbox" name="ipad 2022" id="ipad 2020" />
                            <label htmlFor="ipad 2022"> Glass special</label>
                        </p>
                    </div>

                    <div className="single-filter">
                        <h2 className="company-font font-bold">Colors</h2>

                        <div className="color-buttons">
                            <motion.button 
                                whileTap={{ scale: 0.9 }}
                                whileHover={{scale:1.1}}
                                style={{ background: "red" }}
                            ></motion.button>
                            <motion.button 
                                whileTap={{ scale: 0.9 }}
                                whileHover={{scale:1.1}}
                                style={{ background: "green" }}
                            ></motion.button>
                            <motion.button 
                                whileTap={{ scale: 0.9 }}
                                whileHover={{scale:1.1}}
                                style={{ background: "yellow" }}
                            ></motion.button>
                            <motion.button 
                                whileTap={{ scale: 0.9 }}
                                whileHover={{scale:1.1}}
                                style={{ background: "black" }}
                            ></motion.button>
                            <motion.button 
                                whileTap={{ scale: 0.9 }}
                                whileHover={{scale:1.1}}
                                style={{ background: "cyan" }}
                            ></motion.button>
                            <motion.button 
                                whileTap={{ scale: 0.9 }}
                                whileHover={{scale:1.1}}
                                style={{ background: "white" }}
                            ></motion.button>



                        </div>
                    </div>

                </div>

                <div className="result-products">
                    {products.map((product, ind) => <SingleProduct key={ind} product={product}></SingleProduct>)}

                </div>
            </section>

        </>
    );
};

export default AllTabsCover;