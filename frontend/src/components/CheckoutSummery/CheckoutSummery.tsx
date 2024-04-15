"use client"
import "./CheckoutSummery.scss"
import React, {useState} from 'react';
import {useAppSelector} from "@/redux/hooks";
import useFetch from "@/utility/useFetch";
import axios from "axios";

const CheckoutSummary: React.FC = async () => {
    // Use useAppSelector to get products from the Redux state

    const {products} = useAppSelector((state: { products: any; }) => state.products);
    const [cartData, setCartData] = useState<{ id: string; quantity: string }[]>(
        products?.map((product: { id: { toString: () => any; }; quantity: { toString: () => any; }; }) => ({

            id: product.id.toString(),
            quantity: product.quantity?.toString(),
        }))
    );
    let ship = 0;

if(products) {

    const response = await axios.post(process.env.NEXT_PUBLIC_CMS_UPLOAD_URL + '/omcommerce/shippingcalculator/calculate', {data:{cart: cartData,country_code: "RS"}}, {

        headers: {
            'Content-Type': 'application/json',
        },
    });
    ship = response.data;
}

    let totalPrice = products.reduce((acc: number, item: { quantity: number; amount_value_converted: number;}) =>

        acc + (item?.quantity * item?.amount_value_converted), 0);
    totalPrice = (Math.round(totalPrice) + ship).toString();
    console.log("totalPrice", totalPrice)
    return (
        <div className="checkout">
            <h2>Provera podataka porudžbine</h2>
            <ul>

                {products?.map((item: { quantity: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; amount_value_converted: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; }, index: React.Key | null | undefined) => (
                    <li key={index}>
                        {item?.quantity} x {item?.title} - Jedinična cena: {item?.amount_value_converted} RSD
                    </li>
                ))}
                <li>Poštarina: {ship} RSD</li>
            </ul>

            <div>
                <strong>Ukupna cena: {totalPrice} RSD</strong>
            </div>
        </div>
    );
};

export default CheckoutSummary;