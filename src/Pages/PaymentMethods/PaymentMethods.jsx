import exImg from "../../assets/companyImage/companyImg1.jpg"

import "../ReturnPolicy/ReturnPolicy.css"

const PaymentMethods = () => {
    return (
        <section className="return-policy">
            <h1>Payment Methods for ChaoKaiQi Product Purchase</h1>
            <img className="main-img" src={exImg} alt="happy customer buying tablet cover from ChaoKaiQi" />

            <h2>Major bank transfers:</h2>
            <p>We accept transfers from most major banks directly to our Chinese bank account. This is a reliable and familiar option for many customers. Please refer to our website or contact us for details on our bank account information and any specific transfer instructions.
            </p>

            <h2>Alipay:</h2>
            <p>This popular Chinese e-wallet platform is a fast and hassle-free way to pay online. If you have an Alipay account, you can simply select it as your payment method at checkout and complete the transaction within seconds.
            </p>

            <h2>Wechat Pay:</h2>
            <p>Another widely used e-wallet in China, Wechat Pay offers a convenient and secure way to pay directly from your Wechat app. Choose Wechat Pay at checkout and scan the QR code to finalize your purchase.
            </p>

            <small>We understand that different customers have different preferences, and we want to make sure everyone has a convenient way to pay for their purchases on our website.</small>


            <h2 className="mt-16">Here are some additional benefits of using our payment methods:</h2>
            <ul style={{marginLeft:"1rem"}} className="mb-32">
                <li>Security: All transactions are processed through secure servers and encrypted to protect your financial information.</li>
                <li>Convenience: Choose the payment method that best suits your needs and complete your purchase in just a few clicks.</li>
                <li>Speed: Bank transfers, Alipay, and Wechat Pay offer fast and efficient ways to send your payment, ensuring your order is processed quickly.</li>
            
            </ul>

            <p>For further information pelase contact at <a style={{textDecoration:"underline"}} href="mailto:Chaokaiqi@outlook.com">Chaokaiqi@outlook.com</a></p>






        </section>
    );
};

export default PaymentMethods;