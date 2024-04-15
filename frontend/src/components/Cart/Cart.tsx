"use client"

import {RiShoppingCartLine} from 'react-icons/ri';
import {useState} from "react";
import {useAppSelector} from "@/redux/hooks";
import {RootState} from "@/redux/store";
import CartModal from "@/components/CartModal/CartModal";

const CartComponent = ({layout, logic, resolved_data, children}: any) => {
    const [open,setOpen] = useState<boolean>(false)
    const {products} = useAppSelector((state:RootState)=>state.products)

    const tags = logic?.tags;
    const o_data = resolved_data?.o_data;
    const colFrom = layout?.col_from;
    const colTo = layout?.col_to;
    const rowFrom = layout?.row_from;
    const rowTo = layout?.row_to;
    const styleString: string = layout?.custom_style;
    const styleObject: { [key: string]: string } = styleString?.split(';').reduce((acc: { [key: string]: string }, style: string) => {
        const [key, value] = style?.split(':').map(s => s.trim());
        if (key && value) {
            acc[key.replace(/-([a-z])/g, (g) => g[1].toUpperCase())] = value;
        }
        return acc;
    }, {});

    if (styleString && styleString.trim() !== '') {
        return (
            <div onClick={() => setOpen(!open)}>
                <RiShoppingCartLine  style={styleObject}/>
                <span>{products.length}</span>
                {open && <CartModal open={setOpen}/>}
            </div>
    )
        ;
    } else {
        return (
            <div onClick={() => setOpen(!open)}>
                <RiShoppingCartLine style={{fontSize: "25px", color: "#000"}}/>
                <span>{products.length}</span>
                {/* eslint-disable-next-line react/jsx-no-undef */}
                {open && <CartModal open={setOpen}/>}
            </div>
        );
    }
};

export default CartComponent;
