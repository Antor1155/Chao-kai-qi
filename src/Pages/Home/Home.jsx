import trusted from "../../assets/logos/Shield.svg";
import globalSupplier from "../../assets/logos/GlobalSupplier.svg";
import brands from "../../assets/brands/brands.png";

import "./Home.css"

const Home = () => {
    return (
        <section className="home">
            <div >
                <div className="title-container">
                    <h1>Global Wholesale <span className="chinese-red">supplier</span> <br />
                        Of Phone <span className="chinese-red">Case-Cover</span> <br />
                        From <span className="chinese-red">China</span>
                    </h1>

                    <div className="flex">
                        <div className="text-center">
                            <h2 className="font-20 mb-8">Since <br /> <span className="chinese-red">2012</span></h2>
                            <img className="logo" src={trusted} alt="truested supplier" />
                        </div>

                        <div className="text-center">
                            <h2 className="font-20 mb-8">Overseas supplier <br /> <span className="chinese-red">4M units</span></h2>
                            <img className="logo" src={globalSupplier} alt="Global supplier" />
                        </div>
                    </div>
                </div>

                <div style={{ height: "275px", background: "black", borderRadius:"32px" }}>
                </div>
            </div>

            <div className="brands">
                <h2 className="font-20 text-center">Brands <br /> We cover</h2>

                <div className="brands-logo">
                    <img className="width-48" src={brands} alt="supported phone brands" />
                    <img className="width-48" src={brands} alt="supported phone brands" />
                    <img className="width-48" src={brands} alt="supported phone brands" />
                    <img className="width-48" src={brands} alt="supported phone brands" />
                    <img className="width-48" src={brands} alt="supported phone brands" />

                </div>
            </div>

        </section>
    );
};

export default Home;