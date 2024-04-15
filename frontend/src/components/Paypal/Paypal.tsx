import './Paypal.scss'
import {PayPalButtons} from "@paypal/react-paypal-js";

const Paypal = () => {

    return (
        <div className="paypal">
            <PayPalButtons
                // createOrder={createOrder}
                // onApprove={onApprove}
                // onError={onError}
            >
            </PayPalButtons>
        </div>
    )
}

export default Paypal