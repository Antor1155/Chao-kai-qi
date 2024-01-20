import { useEffect, useRef, useState } from "react";
import SingleProduct from "../../components/SingleProduct/SingleProduct";
import { motion } from "framer-motion"

import "./AllTabsCover.css"

import filter from "../../assets/logos/Filter.svg"
import cancel from "../../assets/logos/Cancel.svg"
import instance from "../../axiosInstance";
import { useParams } from "react-router-dom";

const AllTabsCover = () => {
    const [products, setProducts] = useState([])
    const [brands, setBrands] = useState([])
    const [mobileFilterVisible, setMobileFilterVisible] = useState(false)
    const [selectedModels, setSelectedModels] = useState([]);

    const [disableLoadMore, setDisableLoadMore] = useState(false)

    const { productName } = useParams()


    const starts = useRef(0)
    const ends = useRef(12)

    useEffect(() => {
        if (productName === "all") {
            instance.get(`/all-products/${starts.current}/${ends.current}`)
                .then(data => {
                    setProducts(data.data)
                }).catch(error => {
                    console.log(error)
                })
        }else{
            instance.post("/selected-products", { updatedSelection:[productName] })
                .then(data => {
                    setProducts(data.data)
                })
                .catch(error => [
                    console.log(error)
                ])

            setDisableLoadMore(true)
        }

        instance.get("brands")
            .then(data => {
                setBrands(data.data)
            })
            .catch(error => { console.log(error) })
    }, [productName])


    const handleLoadMore = () => {
        starts.current += ends.current

        instance.get(`/all-products/${starts.current}/${ends.current}`)
            .then(data => {
                const p = data.data

                if (p.length) {
                    setProducts(prev => [...prev, ...p])
                } else {
                    setDisableLoadMore(true)
                }
            }).catch(error => {
                console.log(error)
            })
    }

    const handleCheckboxChange = (model) => {
        const updatedSelection = [...selectedModels]
        const index = updatedSelection.indexOf(model)

        if (index === -1) {
            updatedSelection.push(model)
        } else {
            updatedSelection.splice(index, 1)
        }

        setSelectedModels(updatedSelection)

        if (updatedSelection.length) {
            instance.post("/selected-products", { updatedSelection })
                .then(data => {
                    setProducts(data.data)
                })
                .catch(error => [
                    console.log(error)
                ])

            setDisableLoadMore(true)
            starts.current = 0

        } else {
            instance.get(`/all-products/${starts.current}/${ends.current}`).then(data => {
                setProducts(data.data)
            }).catch(error => {
                console.log(error)
            })

            setDisableLoadMore(false)
        }

    }


    return (
        <section className="all-products-page">
            <h1 className="align-center">All tablet covers by <span className="chinese-red">Chao Kai Qi</span></h1>

            <motion.button
                className="filter-button"
                whileTap={{ scale: 0.9 }}
                onClick={() => setMobileFilterVisible(true)}
            >
                <img src={filter} alt="filter button" />
            </motion.button>

            <section className="all-products-section">

                <div className={`filter-catagories  ${mobileFilterVisible ? "visible" : ""} `} id="filter-catagories">

                    <motion.button
                        className="mobile-visible"
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setMobileFilterVisible(false)}
                    >
                        <img src={cancel} alt="" />
                    </motion.button>

                    {brands.map(brand => (
                        <div key={brand._id} className="single-filter">
                            <h2>{brand._id}</h2>

                            {brand?.products.map(model => (
                                <p key={model}>
                                    <input type="checkbox" name={model} id={model} onChange={() => handleCheckboxChange(model)} />
                                    <label htmlFor={model}>{model}</label>
                                </p>
                            ))}
                        </div>
                    ))}

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
                        <h2 className="company-font font-bold">Colors</h2>

                        <div className="color-buttons">
                            <motion.button
                                whileTap={{ scale: 0.9 }}
                                whileHover={{ scale: 1.1 }}
                                style={{ background: "red" }}
                            ></motion.button>
                            <motion.button
                                whileTap={{ scale: 0.9 }}
                                whileHover={{ scale: 1.1 }}
                                style={{ background: "green" }}
                            ></motion.button>
                            <motion.button
                                whileTap={{ scale: 0.9 }}
                                whileHover={{ scale: 1.1 }}
                                style={{ background: "yellow" }}
                            ></motion.button>
                            <motion.button
                                whileTap={{ scale: 0.9 }}
                                whileHover={{ scale: 1.1 }}
                                style={{ background: "black" }}
                            ></motion.button>
                            <motion.button
                                whileTap={{ scale: 0.9 }}
                                whileHover={{ scale: 1.1 }}
                                style={{ background: "cyan" }}
                            ></motion.button>
                            <motion.button
                                whileTap={{ scale: 0.9 }}
                                whileHover={{ scale: 1.1 }}
                                style={{ background: "white" }}
                            ></motion.button>



                        </div>
                    </div>

                    <div id="mobile-filter-apply">
                        <motion.button
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setMobileFilterVisible(false)}
                        >
                            APPLY
                        </motion.button>
                    </div>

                </div>

                <div className="result-products">
                    {products.map((product, ind) => <SingleProduct key={ind} product={product}></SingleProduct>)}

                </div>
            </section>

            <motion.button
                whileTap={{ scale: disableLoadMore ? 1 : 0.9 }}
                className="load-more-btn"
                whileHover={{ scale: disableLoadMore ? 1 : 1.02 }}
                onClick={handleLoadMore}
                disabled={disableLoadMore}
            >
                LOAD MORE COVER
            </motion.button>

        </section>
    );
};

export default AllTabsCover;