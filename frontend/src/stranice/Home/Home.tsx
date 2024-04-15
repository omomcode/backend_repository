"use client"
import axios from "axios";
import {useEffect, useState} from "react";
import RecursiveRenderer from "@/components/RecursiveRenderer/RecursiveRenderer";




interface json_data {
    objects: any;
}

let json_data = {
    objects: []

}

const HomePage = () => {
    const [show, setShow] = useState(false);
    const [jsonData, setJsonData] = useState<{ objects: any }>({ objects: [] });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get('api/getData');
                setJsonData(res.data);
                setShow(true);
            } catch (error) {
                // Handle the error
            }
        };

        fetchData();
    }, []);

    // const handleClick = async () => {
    //
    // };

    return (
        <>
            {/*<button onClick={handleClick}>Click me</button>*/}
            <RecursiveRenderer jsonData={jsonData} uuid={100} />
        </>
    );
};

export default HomePage;
