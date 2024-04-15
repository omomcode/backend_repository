import Product from "@/types/Product";

interface CartProduct extends Product {
    quantity: number,
    amount_value: number,
    amount_value_converted: number,
    amount_value_converted_currency_code: string
}

export default CartProduct