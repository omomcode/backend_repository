"use client"

const LayoutDivComponent = ({layout, logic, resolved_data, children}: any) => {

    const tags = logic?.tags;
    const o_data = resolved_data?.o_data;
    const colFrom = layout?.col_from;
    const colTo = layout?.col_to;
    const rowFrom = layout?.row_from;
    const rowTo = layout?.row_to;
    let styleString: string = "";
    if(layout?.custom_style){
    styleString= layout?.custom_style +
        `grid-column-start: ${colFrom}; grid-column-end: ${colTo}; grid-row-start: ${rowFrom}; grid-row-end: ${rowTo};`;
    }
    else {
        styleString=
            `grid-column-start: ${colFrom}; grid-column-end: ${colTo}; grid-row-start: ${rowFrom}; grid-row-end: ${rowTo};`;
    }

    console.log("stylestring", styleString)
    const styleObject: { [key: string]: string } = styleString?.split(';').reduce((acc: { [key: string]: string }, style: string) => {
        const [key, value] = style?.split(':').map(s => s.trim());
        if (key && value) {
            acc[key.replace(/-([a-z])/g, (g) => g[1].toUpperCase())] = value;
        }
        return acc;
    }, {});

    if (styleString && styleString.trim() !== '') {
        return (
            <div style={styleObject}>{children}</div>
        );
    } else {
        return (
            <div>{children}</div>
        );
    }
};

export default LayoutDivComponent;
