"use client"
import {useEffect, useState} from "react";
import {makeRequest} from "@/utility/makeRequest";

const useFetch = <T>(url: string) => {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const res = await makeRequest.get(url);
                setData(res.data);

            } catch (err) {
                setError(true);
            }
            setLoading(false);
        };
        fetchData().then(r => {

        });
    }, []);

    return {data, loading, error};
};

export default useFetch;