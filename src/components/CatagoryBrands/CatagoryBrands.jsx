import { useEffect, useState } from "react";
import instance from "../../axiosInstance";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";

import "./CatagoryBrands.css"

import cancel from "../../assets/logos/cancel.svg"


// eslint-disable-next-line react/prop-types
const CatagoryBrands = ({ isCatagoryOpen, setCatagoryOpen }) => {

    const [brands, setBrands] = useState([])

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
                            onClick={()=>setCatagoryOpen(false)}
                            whileTap={{scale:0.9}}
                        >
                            <img src={cancel} alt="cancle button" />
                        </motion.button>

                        {brands.map(brand => (
                            <div key={brand._id} className="single-brans">
                                <h2 className="mb-16 chinese-red">{brand._id}</h2>

                                {brand?.products.map(model => (
                                    <Link key={model} to={`/all-wholesale-tablet-covers/${model}`}>
                                        <motion.span
                                            whileHover={{color:"#25CBE1"}}
                                            onClick={()=>setCatagoryOpen(false)}
                                        >
                                            {model}
                                        </motion.span>
                                    </Link>
                                ))}
                            </div>
                        ))}

                    </motion.div>
                }
            </AnimatePresence>
        </>
    );
};

export default CatagoryBrands;