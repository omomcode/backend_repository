"use client"
import "./CartModal.scss"

import Image from "next/image";
import {
    faTrash,
} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import {useAppDispatch, useAppSelector} from "@/redux/hooks";
import {RootState} from "@/redux/store";
import CartProduct from "@/types/CartProduct";
import React from "react";
import {useDispatch} from "react-redux";
import {removeItem, resetCart} from "@/redux/cartReducer";
import Link from "next/link";
import { useRouter } from 'next/navigation'
const CartModal = ({open}: any) => {
    const router = useRouter()
    const {products} = useAppSelector((state: RootState) => state.products)
    // const [firstValue] = Object.values(products)
    // const [first] = Object.values(firstValue);

    const dispatch = useDispatch();
    const totalPrice = () => {
        let total = 0;
        products.forEach((item) => (total += item.quantity * item.amount_value_converted));
        const totalRounded = Math.round(total);
        return totalRounded;
    }

    const handleCart = () => {
        if(products[0]) {
            open(false);
            router.push('/')
        }
    }


    return (
        <div className="cart">
            <h1>Products in you cart</h1>
            {products?.map(item => (
                <div className="item" key={item.id}>
                    {/*<Image*/}
                    {/*    loader={() => process.env.NEXT_PUBLIC_CMS_UPLOAD_URL + item?.img.data.url}*/}
                    {/*    src={process.env.NEXT_PUBLIC_CMS_UPLOAD_URL + item?.img?.data??.url}*/}
                    {/*    alt="" className="mainImg" width={50} height={50} unoptimized></Image>*/}
                    <div className="details">
                        <h1>{item?.title}</h1>
                        <div className="price">
                            {item?.quantity} x {item?.amount_value_converted} RSD
                        </div>
                    </div>
                    <FontAwesomeIcon className="delete" icon={faTrash} onClick={() => dispatch(removeItem(item.id))}/>
                </div>
            ))}
            <div className="total">
                <span>UKUPNO</span>
                <span>{totalPrice()} RSD</span>
            </div>
            <div className="link">
                <button onClick={handleCart}>NASTAVITE NA PLAĆANJE</button>
            </div>

            <span className="reset" onClick={() => dispatch(resetCart())}>Isprazni korpu</span>
        </div>
    )
}

export default CartModal