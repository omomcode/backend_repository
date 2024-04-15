"use client"

const CustomLinkComponent = ({layout, logic, resolved_data, children}: any) => {

    const tags = logic?.tags;
    const o_data = resolved_data?.o_data;
    const colFrom = layout?.col_from;
    const colTo = layout?.col_to;
    const rowFrom = layout?.row_from;
    const rowTo = layout?.row_to;
    let styleString: string = "";
    if(layout?.custom_style){
        styleString= layout?.custom_style + "text-decoration:none;color:black;";
    }
    else {
        styleString=
            "text-decoration:none;color:black;"
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
            <a href={o_data} style={styleObject}>{children}</a>
        );
    } else {
        return (
            <a href={o_data}>{children}</a>
        );
    }
};

export default CustomLinkComponent;
