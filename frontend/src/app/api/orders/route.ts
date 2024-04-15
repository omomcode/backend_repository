import {NextApiRequest, NextApiResponse} from "next";
import {capturePayment, createOrder} from "@/utility/payment/paymentHelper";

export async function POST(req: Request,res: Response) {
    try {
        const response = await createOrder();
        // res.json(response);
        return new Response(JSON.stringify(response))
    } catch (error: any) {
        console.error('Failed to create order:', error);
        // res.status(500).json({ error: 'Failed to create order.' });
        return new Response(JSON.stringify(error))
    }
}