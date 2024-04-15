interface Product {
    id: number;

    media: [{
        url: string
    }],
    description: string,
    SKU: string,
    tax_currency_code: string,
    compare_at_price: string,
    amount_currency_code: string,
    title: string,
    type: string,
    amount_value: number,
    amount_value_converted: number,
    tax_value: number,
    chargeTax: boolean,
    Quantity: number,
    Barcode: string,
    cost_per_item: string,
    showQuantity: boolean,
    weight: number,
    measurement_unit: string,
    shipping_rate: number,
    slug: string,

}

export default Product