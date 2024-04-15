import {NextApiRequest, NextApiResponse} from "next";
import {capturePayment} from "@/utility/payment/paymentHelper";

export async function POST(req: Request,res: Response) {

    const data = await req.json();
    const orderID = data.orderID;

    try {
        const response = await capturePayment(orderID);
        return new Response(JSON.stringify(response))
    } catch (error) {
        console.error('Failed to create order:', error);
        return new Response(JSON.stringify({ error: 'Failed to capture order.' }))
    }
}