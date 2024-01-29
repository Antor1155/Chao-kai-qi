import { useEffect, useState } from "react";
import instance from "../../axiosInstance";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";

import "./CatagoryBrands.css"

import cancel from "../../assets/logos/cancel.svg"


// eslint-disable-next-line react/prop-types
const CatagoryBrands = ({ isCatagoryOpen, setCatagoryOpen }) => {

    const [brands, setBrands] = useState([])

    console.log(brands)

    useEffect(() => {
        instance.get("/brands")
            .then(data => {
                setBrands(data.data)
            }).catch(error => {
                console.log(error)
            })
    }, [])

    return (
        <>
            <AnimatePresence>
                {
                    isCatagoryOpen &&
                    <motion.div
                        onMouseEnter={() => setCatagoryOpen(true)}
                        onMouseLeave={() => setCatagoryOpen(false)}

                        id="catagories"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ delay: 0.1 }}
                    >

                        <motion.button className="mobile-view"
                            onClick={() => setCatagoryOpen(false)}
                            whileTap={{ scale: 0.9 }}
                        >
                            <img src={cancel} alt="cancle button" />
                        </motion.button>

                        {
                            brands.length ?

                                <>
                                    <div className="single-brans">
                                        <h2 className="mb-16 chinese-red">{brands[0]._id}</h2>

                                        {brands[0].products.map(model => (
                                            <Link key={model} to={`/all-wholesale-tablet-covers/${model}`}>
                                                <motion.span
                                                    whileHover={{ color: "#25CBE1" }}
                                                    onClick={() => setCatagoryOpen(false)}
                                                >
                                                    {model}
                                                </motion.span>
                                            </Link>
                                        ))}
                                    </div>

                                    <div className="single-brans">
                                        <h2 className="mb-16 chinese-red">{brands[6]._id}</h2>

                                        {brands[6].products.map(model => (
                                            <Link key={model} to={`/all-wholesale-tablet-covers/${model}`}>
                                                <motion.span
                                                    whileHover={{ color: "#25CBE1" }}
                                                    onClick={() => setCatagoryOpen(false)}
                                                >
                                                    {model}
                                                </motion.span>
                                            </Link>
                                        ))}
                                    </div>

                                    <div>
                                        <div className="single-brans">
                                            <h2 className="mb-16 chinese-red">{brands[1]._id}</h2>

                                            {brands[1].products.map(model => (
                                                <Link key={model} to={`/all-wholesale-tablet-covers/${model}`}>
                                                    <motion.span
                                                        whileHover={{ color: "#25CBE1" }}
                                                        onClick={() => setCatagoryOpen(false)}
                                                    >
                                                        {model}
                                                    </motion.span>
                                                </Link>
                                            ))}
                                        </div>

                                        <div className="single-brans">
                                            <h2 className="mb-16 chinese-red">{brands[2]._id}</h2>

                                            {brands[2].products.map(model => (
                                                <Link key={model} to={`/all-wholesale-tablet-covers/${model}`}>
                                                    <motion.span
                                                        whileHover={{ color: "#25CBE1" }}
                                                        onClick={() => setCatagoryOpen(false)}
                                                    >
                                                        {model}
                                                    </motion.span>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <div className="single-brans">
                                            <h2 className="mb-16 chinese-red">{brands[5]._id}</h2>

                                            {brands[5].products.map(model => (
                                                <Link key={model} to={`/all-wholesale-tablet-covers/${model}`}>
                                                    <motion.span
                                                        whileHover={{ color: "#25CBE1" }}
                                                        onClick={() => setCatagoryOpen(false)}
                                                    >
                                                        {model}
                                                    </motion.span>
                                                </Link>
                                            ))}
                                        </div>

                                        <div className="single-brans">
                                            <h2 className="mb-16 chinese-red">{brands[8]._id}</h2>

                                            {brands[8].products.map(model => (
                                                <Link key={model} to={`/all-wholesale-tablet-covers/${model}`}>
                                                    <motion.span
                                                        whileHover={{ color: "#25CBE1" }}
                                                        onClick={() => setCatagoryOpen(false)}
                                                    >
                                                        {model}
                                                    </motion.span>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <div className="single-brans">
                                            <h2 className="mb-16 chinese-red">{brands[3]._id}</h2>

                                            {brands[3].products.map(model => (
                                                <Link key={model} to={`/all-wholesale-tablet-covers/${model}`}>
                                                    <motion.span
                                                        whileHover={{ color: "#25CBE1" }}
                                                        onClick={() => setCatagoryOpen(false)}
                                                    >
                                                        {model}
                                                    </motion.span>
                                                </Link>
                                            ))}
                                        </div>

                                        <div className="single-brans">
                                            <h2 className="mb-16 chinese-red">{brands[4]._id}</h2>

                                            {brands[4].products.map(model => (
                                                <Link key={model} to={`/all-wholesale-tablet-covers/${model}`}>
                                                    <motion.span
                                                        whileHover={{ color: "#25CBE1" }}
                                                        onClick={() => setCatagoryOpen(false)}
                                                    >
                                                        {model}
                                                    </motion.span>
                                                </Link>
                                            ))}
                                        </div>

                                        <div className="single-brans">
                                            <h2 className="mb-16 chinese-red">{brands[7]._id}</h2>

                                            {brands[7].products.map(model => (
                                                <Link key={model} to={`/all-wholesale-tablet-covers/${model}`}>
                                                    <motion.span
                                                        whileHover={{ color: "#25CBE1" }}
                                                        onClick={() => setCatagoryOpen(false)}
                                                    >
                                                        {model}
                                                    </motion.span>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>



                                </>
                                :
                                ""

                        }

                    </motion.div>
                }
            </AnimatePresence>
        </>
    );
};

export default CatagoryBrands;