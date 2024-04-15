"use client"

const ButtonComponent = ({layout, logic, resolved_data, children}: any) => {

    const tags = logic?.tags;
    const o_data = resolved_data?.o_data;
    const styleString: string = layout?.custom_style;
    const styleObject: { [key: string]: string } = styleString?.split(';').reduce((acc: { [key: string]: string }, style: string) => {
        const [key, value] = style?.split(':').map(s => s.trim());
        if (key && value) {
            acc[key.replace(/-([a-z])/g, (g) => g[1].toUpperCase())] = value;
        }
        return acc;
    }, {});

    if (styleString && styleString.trim() !== '') {
        return (
            <button style={styleObject}>{children}</button>
        );
    } else {
        return (
            <button>{children}</button>
        );
    }
};

export default ButtonComponent;
