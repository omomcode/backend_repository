"use client";

import { store } from "./store";
import { Provider } from "react-redux";
import {PayPalScriptProvider} from "@paypal/react-paypal-js";

export function Providers({ children }: { children: React.ReactNode }) {



    return (
        <PayPalScriptProvider deferLoading={true} options={{clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID as string}}>
            <Provider store={store}>{children}</Provider>
        </PayPalScriptProvider>
    );
}