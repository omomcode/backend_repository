"use client"

const PageComponent = ({layout, logic, resolved_data, children}: any) => {

    const tags = logic?.tags;
    const o_data = resolved_data?.o_data;
    const gridTemplateColumns = "1fr ".repeat(12);
    let styleString: string = "";
    if(layout?.custom_style){
        styleString= layout?.custom_style +
            `display:grid;grid-template-columns: ${gridTemplateColumns.trim()};`;
    }
    else {
        styleString=
            `display:grid;grid-template-columns: ${gridTemplateColumns.trim()};`;
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
            <div style={styleObject}>{children}</div>
        );
    } else {
        return (
            <div>{children}</div>
        );
    }
};

export default PageComponent;
