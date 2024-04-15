import type { Metadata } from 'next'
import {ReactNode} from "react";

export const metadata: Metadata = {
    title: 'Payment',
    description: 'Payment page',
}

const PaymentLayout = ({ children, }: { children: ReactNode; }) => (
    <>
        {children}
    </>
);

export default PaymentLayout;