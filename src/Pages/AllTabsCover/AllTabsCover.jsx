import { useEffect, useState } from "react";
import SingleProduct from "../../components/SingleProduct/SingleProduct";

import "./AllTabsCover.css"

const AllTabsCover = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        setProducts([5, 2, 5, 33, 22, 55, 22, 11, 44])
    }, [])

    return (
        <>
            <h1 className="mb-gapping-tape align-center">Ipad air 2020 tablet covers</h1>

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

                </div>

                <div className="result-products">
                    {products.map((product, ind) => <SingleProduct key={ind} product={product}></SingleProduct>)}

                </div>
            </section>

        </>
    );
};

export default AllTabsCover;