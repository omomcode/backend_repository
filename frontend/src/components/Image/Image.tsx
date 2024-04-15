"use client"
import Image from 'next/image'
const ImageComponent = ({layout, logic, resolved_data, children}: any) => {

    const tags = logic?.tags;
    const o_data = resolved_data?.o_data;
    const colFrom = layout?.col_from;
    const colTo = layout?.col_to;
    const rowFrom = layout?.row_from;
    const rowTo = layout?.row_to;
    let styleString: string = "";
    if(layout?.custom_style){
        styleString= layout?.custom_style + "width:100%!important;height:100%!important;object-fit:contain!important;";
    }
    else {
        styleString=
            "width:100%!important;height:100%!important;object-fit:contain!important;";
    }


    const styleObject: { [key: string]: string } = styleString?.split(';').reduce((acc: { [key: string]: string }, style: string) => {
        const [key, value] = style?.split(':').map(s => s.trim());
        if (key && value) {
            acc[key.replace(/-([a-z])/g, (g) => g[1].toUpperCase())] = value;
        }
        return acc;
    }, {});

    if (styleString && styleString.trim() !== '') {
        return (
            <img src={o_data}  alt={"Image not found"} style={styleObject}>{children}</img>
        );
    } else {
        return (
                <img src={o_data}  alt={"Image not found"}>{children}</img>
        );
    }
};

export default ImageComponent;
