import { useState } from "react";
import { motion } from "framer-motion"
import { Link } from "react-router-dom";

import "./Cart.css"

const Cart = () => {
    const [cart] = useState(JSON.parse(localStorage.getItem("chaoKaiQi-cart")) ?? [])
    console.log(cart)

    return (
        <section>
            <motion.div>

                {cart.map((item, ind) => (
                    <Link to={`/wholesale-tablet-cover/${item?.productName}/${item.productId}`} key={ind}>

                        <motion.div className="cart-item">
                            <img src={item?.mainImage + ".jpg"} alt={item?.productName + " cover"} />

                            <div>
                                <h2 className="chinese-red">{item?.productName} cover</h2>
                                <p>{item?.coverName}</p>
                                <p>{item?.brand}</p>
                            </div>
                        </motion.div>

                    </Link>
                ))}

            </motion.div>

            <div>
                {cart.length}
            </div>
        </section>
    );
};

export default Cart;