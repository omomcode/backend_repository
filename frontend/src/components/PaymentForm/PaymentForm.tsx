"use client"
import {useState, useRef, useEffect} from "react";
import "./PaypalForm.scss"
import {PayPalButtons, PayPalScriptProvider} from "@paypal/react-paypal-js";
import axios from "axios";
import {useAppSelector} from "@/redux/hooks";
import {RootState} from "@/redux/store";

const PaymentForm = () => {
    function showAlert() {
        alert('This is an alert message!');
    }

    const returnClientId = () => {
        if(process.env.NEXT_PAYPAL_CLIENT_ID)
            return process.env.NEXT_PAYPAL_CLIENT_ID;
        else
            return "test"
    }
    // @ts-ignore
    const initialOptions = {
        clientId: "AbR_8aOj6sjAO4uVgpF6i1W2wAPRNKTFJYvvlClX0zoeKGo0iJUuxeISqQ41OH6t8ahL7egPESU-ELEm",
        currency: "EUR",
        intent: "capture",
        'enable-funding': 'paylater,venmo',
        'data-sdk-integration-source': 'integrationbuilder_ac',
    };

    const {products} = useAppSelector((state: RootState) => state.products)

    // @ts-ignore
    // useEffect(  async () => {
    //     getDat();
    //
    //
    // }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // const result = await convertFromEURtoRSD(12.349047375);
            } catch (error) {
                console.error(error);
            }
        }
        fetchData();
    });


    const [message, setMessage] = useState<string>('');
    // const [data, setData] = useState();


    const [cartData, setCartData] = useState<{ id: string; quantity: string }[]>(
        products.map((product) => ({
            id: product.id.toString(),
            quantity: product.quantity?.toString(),
        }))
    );

    function Message(props: { content: string }) {
        return <p>{props.content}</p>;
    }

    return (
        <div className="paymentprocess">
            <PayPalScriptProvider options={initialOptions}>
                <PayPalButtons
                    className="paypalButton"
                    style={{
                        shape: 'rect',
                        //color:'blue' change the default color of the buttons
                        layout: 'vertical', //default value. Can be changed to horizontal
                    }}
                    createOrder={async () => {


                        try {
                            const url = process.env.NEXT_PUBLIC_CMS_UPLOAD_URL + '/omcommerce/payment/orders';
                            const response = await axios.post(url, {cart :cartData, country_code: "RS"}, {

                                headers: {
                                    'Content-Type': 'application/json',
                                },
                            });

                            const orderData = response.data;

                            //     // use the "body" param to optionally pass additional order information
                            //     // like product ids and quantities
                            //     body: JSON.stringify({
                            //         cart: [
                            //             {
                            //                 id: '1',
                            //                 quantity: '1',
                            //             },
                            //         country_code : "RS"
                            //         ],
                            //     }),
                            // });
                            //
                            // const orderData = await response.json();

                            if (orderData.id) {
                                return orderData.id;
                            } else {
                                const errorDetail = orderData?.details?.[0];
                                const errorMessage = errorDetail
                                    ? `${errorDetail.issue} ${errorDetail.description} (${orderData.debug_id})`
                                    : JSON.stringify(orderData);

                                throw new Error(errorMessage);
                            }
                        } catch (error) {
                            console.error(error);
                            setMessage(
                                `Could not initiate PayPal Checkout...${error}`,
                            );
                        }
                    }}
                    onApprove={async (data, actions) => {
                        try {
                            // const response = await fetch(
                            const response = await axios.post(process.env.NEXT_PUBLIC_CMS_UPLOAD_URL + `/omcommerce/payment/capture`,

                                {
                                    orderID: data.orderID
                                }
                            );

                            const orderData = await response.data;
                            // Three cases to handle:
                            //   (1) Recoverable INSTRUMENT_DECLINED -> call actions.restart()
                            //   (2) Other non-recoverable errors -> Show a failure message
                            //   (3) Successful transaction -> Show confirmation or thank you message

                            const errorDetail = orderData?.details?.[0];

                            if (errorDetail?.issue === 'INSTRUMENT_DECLINED') {
                                // (1) Recoverable INSTRUMENT_DECLINED -> call actions.restart()
                                // recoverable state, per https://developer.paypal.com/docs/checkout/standard/customize/handle-funding-failures/
                                return actions.restart();
                            } else if (errorDetail) {
                                // (2) Other non-recoverable errors -> Show a failure message
                                throw new Error(
                                    `${errorDetail.description} (${orderData.debug_id})`,
                                );
                            } else {
                                // (3) Successful transaction -> Show confirmation or thank you message
                                // Or go to another URL:  actions.redirect('thank_you.html');
                                const transaction =
                                    orderData.purchase_units[0].payments.captures[0];
                                setMessage(
                                    `Transaction ${transaction.status}: ${transaction.id}`,
                                );
                                console.log(
                                    'Capture result',
                                    orderData,
                                    JSON.stringify(orderData, null, 2),
                                );
                            }
                        } catch (error) {
                            console.error(error);
                            setMessage(
                                `Sorry, your transaction could not be processed...${error}`,
                            );
                        }
                    }}
                />
            </PayPalScriptProvider>
            {message &&
            <div className="alert-message">
                <Message content={message}/>
            </div>
            }
        </div>

    )


}
export default PaymentForm