import trusted from "../../assets/logos/Shield.svg";
import globalSupplier from "../../assets/logos/GlobalSupplier.svg";
import brands from "../../assets/brands/brands.png";
import banner from "../../assets/banner/carbanner.avif"

import "./Home.css"

const Home = () => {
    return (
        <section className="home">
            <div className="main-content">
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

                <div style={{ height: "275px", borderRadius:"32px", overflow:"hidden" }}>

                    <img 
                        style={{width: "100%", height:"100%"}}
                    src={banner} alt="" />
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