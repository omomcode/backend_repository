"use client"
import './Social.scss';
import React from "react";
import Link from "next/link";
import useFetch from "@/utility/useFetch";
import {FaInstagram} from 'react-icons/fa6';
import {FaFacebookSquare} from 'react-icons/fa';
import {FaSquareXTwitter} from 'react-icons/fa6';
import {FaPinterestSquare} from 'react-icons/fa';
import {FaTiktok} from 'react-icons/fa6';
import NotFoundImg from "../../../public/img/Screenshot-2018-12-16-at-21.06.29.png";


const Social = ({layout, logic, resolved_data, children}: any) => {

    // const {data, loading, error} = useFetch<Social>(`/omcommerce/social/find`);
    //
    // let instagram_enabled = false;
    // let facebook_enabled = false;
    // let pinterest_enabled = false;
    // let tiktok_enabled = false;
    // let x_enabled = false;
    //
    // let instagram = "";
    // let facebook = "";
    // let pinterest = "";
    // let tiktok = "";
    // let x = "";
    //
    // if (!loading && data !== null) {
    //     console.log(data)
    //
    //
    //     instagram = data.instagram;
    //     facebook = data.facebook;
    //     pinterest = data.pinterest;
    //     tiktok = data.tiktok;
    //     x = data.x;
    //
    //     if(instagram)
    //     instagram_enabled = data.instagram_enabled;
    //     if(facebook)
    //     facebook_enabled = data.facebook_enabled;
    //     if(pinterest)
    //     pinterest_enabled = data.pinterest_enabled;
    //     if(tiktok)
    //     tiktok_enabled = data.tiktok_enabled;
    //     if(x)
    //     x_enabled = data.x_enabled;
    // }

    return (
        <div className="social">
            {/*{error ? "Something went wrong"*/}
            {/*    : (loading ? "Loading..." :*/}
            {/*        (data && <>*/}
            {/*        {instagram_enabled && <Link href={instagram} target={"_blank"} className="social-item">*/}
            {/*            <FaInstagram/>*/}
            {/*        </Link>}*/}
            {/*            {facebook_enabled && <Link href={facebook} target={"_blank"} className="social-item">*/}
            {/*                <FaFacebookSquare/>*/}
            {/*            </Link>}*/}
            {/*            {x_enabled && <Link href={x} target={"_blank"} className="social-item">*/}
            {/*                <FaSquareXTwitter/>*/}
            {/*            </Link>}*/}
            {/*            {pinterest_enabled && <Link href={pinterest} target={"_blank"} className="social-item">*/}
            {/*                <FaPinterestSquare/>*/}
            {/*            </Link>}*/}
            {/*            {tiktok_enabled && <Link href={tiktok} target={"_blank"} className="social-item">*/}
            {/*                <FaTiktok/>*/}
            {/*            </Link>}*/}

            {/*        </> )*/}
            {/*    )}*/}
            <p>Social</p>
        </div>

    )
}

export default Social