import { useState } from "react";
import { motion } from "framer-motion"
import { Link } from "react-router-dom";

import "./Cart.css"
import { toast } from "react-toastify";

const Cart = () => {
    const [cart] = useState(JSON.parse(localStorage.getItem("chaoKaiQi-cart")) ?? [])
    console.log(cart)

    const handleInfoSubmit = (e) => {
        e.preventDefault()
        e.target.reset()

        toast("Thanks for placing the quota. Our team will contact you very fast to talk about processing the order ")
    }

    return (
        <section id="cart-section">
            <motion.div>

                {cart.map((item, ind) => (
                    <Link to={`/wholesale-tablet-cover/${item?.productName}/${item.productId}`} key={ind}>

                        <motion.div className="cart-item">
                            <img src={item?.mainImage + ".jpg"} alt={item?.productName + " cover"} />

                            <div>
                                <h2 className="chinese-red">{item?.productName} cover</h2>
                                <p><span className="label">Cover name: </span>{item?.coverName}</p>

                                <div className="inline-p">
                                    <p><span className="label">Color: </span>{item?.color?.name}</p>
                                    <p><span className="label">Brand: </span>{item?.brand}</p>
                                </div>

                                <div className="inline-p small-font">
                                    <p><span className="label">Price / unit : </span>{item?.priceperUnit} USD</p>
                                    <p><span className="label">Weight / unit : </span>{item?.productGrossWeight} g</p>
                                    <p><span className="label">Size / unit : </span>{item?.productSize} cm</p>
                                </div>

                                <div className="inline-p">
                                    <p className="font-bold"><span >Total order: </span>{item?.orderAmount} units</p>
                                    <p className="font-bold"><span >Total price: </span>$ {item?.totalPrice} USD</p>
                                </div>
                            </div>
                        </motion.div>

                    </Link>
                ))}

            </motion.div>

            <div>
                <div className="form-container">
                    <form onSubmit={handleInfoSubmit}>
                        <div>
                            <label htmlFor="name">Name</label>
                            <input id="name" name="name" type="text" required />
                        </div>

                        <div>
                            <label htmlFor="country">Country</label>
                            <input id="country" name="country" type="text" required />
                        </div>

                        <div>
                            <label htmlFor="organization">Organization name</label>
                            <input id="organization" name="organization" type="text" required />
                        </div>

                        <div>
                            <label htmlFor="email">email</label>
                            <input id="email" name="email" type="text" required />
                        </div>

                        <div>
                            <label htmlFor="mobile">Phone number</label>
                            <input id="mobile" name="mobile" type="text" required />
                        </div>

                        <div>
                            <label htmlFor="note">Special note</label>
                            <textarea name="note" id="note" cols="22" rows="4"></textarea>
                        </div>

                        <motion.button
                            type="submit"
                            className="fw-button"
                            whileTap={{ scale: 0.95 }}
                        >PLACE ORDER</motion.button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Cart;