import exImg from "../../assets/companyImage/companyImg1.jpg"

import "./ReturnPolicy.css"

const ReturnPolicy = () => {
    return (
        <section className="return-policy">
            <h1>Return And Refund Policy of ChaoKaiQi</h1>
            <img className="main-img" src={exImg} alt="happy customer returning product to ChaoKaiQi" />

            <h2>Returning Normal Products</h2>
            <p>Please be advised that shipping fee and express shipping fee are non-refundable. Any
                discounts that were applied with a minimum purchase requirement may not be
                applicable after a removal of product(s) in an order. For discounts that are applicable on
                second/subsequent item, the discount will be revoked on partial return of the order, and
                the unreturned item will be charged in original price. Shipping fee may also be applied.
            </p>

            <h2>Returning Customized Products</h2>
            <p>Customized products are your unique creative expressions. Returns on customized
                item(s) for reasons other than CHAOKAIQI error will be subject to a 50% processing fee
                on the refund amount (after adjustment of discount/shipping, if required).
            </p>

            <h2>Refund Policy</h2>
            <p>Returns made will be refunded in your original form of payment. If the payment was
                made using credit / debit card or bank account, there might be a lead time required by
                PayPal (our credit card settlement service provider) to set up the credit transaction with
                your bank.
            </p>




        </section>
    );
};

export default ReturnPolicy;