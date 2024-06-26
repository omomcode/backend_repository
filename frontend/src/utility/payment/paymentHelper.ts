

const { NEXT_PUBLIC_PAYPAL_CLIENT_ID, NEXT_PUBLIC_PAYPAL_CLIENT_SECRET,NEXT_PUBLIC_PAYPAL_ENVIRONMENT } = process.env;
const base = NEXT_PUBLIC_PAYPAL_ENVIRONMENT==='sandbox' ? "https://api-m.sandbox.paypal.com" : "https://api-m.paypal.com";
export const capturePayment = async (orderID : string) => {
    const accessToken = await generateAccessToken();
    const url = `${base}/v2/checkout/orders/${orderID}/capture`;

    const response = await fetch(url, {
        method: "post",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
        }
    });

    return handleResponse(response);
};
const generateAccessToken = async () => {
    try {
        const auth = Buffer.from(NEXT_PUBLIC_PAYPAL_CLIENT_ID + ":" + NEXT_PUBLIC_PAYPAL_CLIENT_SECRET).toString("base64");
        const response = await fetch(`${base}/v1/oauth2/token`, {
            method: "post",
            body: "grant_type=client_credentials",
            headers: {
                Authorization: `Basic ${auth}`,
            },
        });

        const data = await response.json();
        return data.access_token;
    } catch(error) {
        console.error("Failed to generate Access Token:", error);
    }
};

async function handleResponse(response : Response) {
    if (response.status === 200 || response.status === 201) {
        return response.json();
    }

    const errorMessage = await response.text();
    throw new Error(errorMessage);
}

export const createOrder = async () => {
    const accessToken = await generateAccessToken();
    const url = `${base}/v2/checkout/orders`;
    const payload = {
        intent: "CAPTURE",
        purchase_units: [
            {
                amount: {
                    currency_code: "USD",
                    value: "0.02",
                },
            },
        ],
    };

    const response = await fetch(url, {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
        },
        method: "POST",
        body: JSON.stringify(payload),
    });

    return handleResponse(response);
};