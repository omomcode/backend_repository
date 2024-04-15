"use client"
import "./Order.scss"
import PaymentForm from "@/components/PaymentForm/PaymentForm";
import CheckoutSummary from "@/components/CheckoutSummery/CheckoutSummery";

const OrderPage = () => {

    return (
        <div className="order">
            <div className="left">
                <div className="shipping">
                    <h2>Pregled porudžbine</h2>
                    <CheckoutSummary />
                    {/*<h2>Email for confirmation</h2>*/}
                    {/*<ShippingForm />*/}

                </div>
            </div>
            <div className="right">
                <PaymentForm />
            </div>

        </div>
    );
}
export default OrderPage;