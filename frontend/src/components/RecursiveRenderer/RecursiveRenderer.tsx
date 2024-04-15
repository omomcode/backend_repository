import React from 'react';
import ButtonComponent from "@/components/Button/Button";
import LayoutDivComponent from "@/components/LayoutDiv/LayoutDiv";
import WrapperComponent from "@/components/Wrapper/Wrapper";
import PageComponent from "@/components/Page/Page";
import HeaderComponent from "@/components/Header/Header";
import FooterComponent from "@/components/Footer/Footer";
import Social from "@/components/Social/Social";
import TitleComponent from "@/components/Title/Title";
import CustomLinkComponent from "@/components/CustomLink/CustomLink";
import CartComponent from "@/components/Cart/Cart";
import Payment from "@/stranice/Payment/Payment";
import SpanComponent from "@/components/Span/Span";
import ImageComponent from "@/components/Image/Image";
import TextComponent from "@/components/Text/Text";

const RecursiveRenderer = ({ jsonData, uuid } : any) => {

    let objects = jsonData.objects;
    let layout = jsonData.layout;
    let o_data = jsonData.o_data;
    let logic = jsonData.logic;
    let resolved_data = jsonData.resolved_data;
    let data_types = jsonData.data_types;
    let resolvable_tags = jsonData.resolvable_tags;
    let tags = jsonData.tags;


    const componentMap : any = {
        601: LayoutDivComponent,
        602: WrapperComponent,
        603: PageComponent,
        604: HeaderComponent,
        605: FooterComponent,
        // 606: CarouselComponent,
        // 607: CardListComponent,
        // 608: CardComponent,
        // 609: SearchBar,
        // 610: TextWithImage,
        611: TextComponent,
        612: ImageComponent,
        // 613: IconComponent,
        614: ButtonComponent,
        // 615: ListComponent,
        616: Social,
        617: TitleComponent,
        618: CustomLinkComponent,
        619: CartComponent,
        // 620: FilterComponent,
        621: Payment,
        622: SpanComponent

    };


    const renderChildren =
        (obj: { uuid: React.Key | null | undefined; layout: string | number | boolean |
                React.ReactElement<any, string | React.JSXElementConstructor<any>> |
                Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode |
                null | undefined; o_data: string | number | boolean |
                React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode>
                | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; logic: string | number | boolean
                | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode>
                | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; children: any[]; },
         layout: any, o_data: any, logic: any, resolved_data: any, data_types: any,
         resolvable_tags: any, tags: any) => {
            const obj_layout = layout && layout.find((l: { id: any; }) => l.id === obj.layout);
            const obj_o_data = o_data && o_data.find((o: { id: any; }) => o.id === obj.o_data);
            const obj_logic = logic && logic.find((l: { id: any; }) => l.id === obj.logic);
            const obj_resolved_data = resolved_data && resolved_data.find((r: { id: any; }) => r.id === parseInt(obj_o_data?.relations[1]));
            const obj_data_types = data_types && data_types.find((d: { id: any; }) => d.id === parseInt(obj_o_data?.relations[0]));
            const obj_resolvable_tags = resolvable_tags && resolvable_tags.find((r: { id: any; }) => r.id === obj_logic.resolvable);
            console.log(obj_resolvable_tags)
            //const obj_tags = tags && tags.find((t: { id: any; }) => t.id === obj.tags);
        const renderedChildren = obj.children && obj.children.map(childUuid => {
            const childObj = objects.find((o: { uuid: number; }) => o.uuid === parseInt(childUuid));
            if (childObj) {
                return renderChildren(childObj, layout, o_data, logic, resolved_data, data_types, resolvable_tags, tags);
            }
            return null;
        });

        // @ts-ignore
            return (
            <React.Fragment key={obj.uuid}>
                {/*<span>UUID: {obj.uuid}</span>*/}
                {/*<span>Layout: {obj.layout}</span>*/}
                {/*<span>o_data: {obj.o_data}</span>*/}
                {/*<span>logic: {obj.logic}</span>*/}
                {/*<span>layout: {obj_layout?.custom_style}</span>*/}
                {/*<span>obj_resolved_data: {obj_resolved_data?.o_data}</span>*/}
                {obj_resolvable_tags && componentMap[obj_resolvable_tags?.id] && (
                    // Render the component based on the obj_resolvable_tags value
                    React.createElement(componentMap[obj_resolvable_tags?.id], {layout:obj_layout,logic:obj_logic,resolved_data:obj_resolved_data}, renderedChildren)
                )}
                {/*{obj.children && <span>children: {obj.children.map(childUuid => {return "child:" + childUuid} )}</span>}*/}

                {/*<br/>*/}

                {/*<br/>*/}
                {/*{obj.children && obj.children.map(childUuid => {*/}
                {/*    const childObj = objects.find((o: { uuid: number; }) => o.uuid === parseInt(childUuid));*/}
                {/*    if (childObj) {*/}
                {/*        return renderChildren(childObj, layout, o_data, logic, resolved_data, data_types, resolvable_tags, tags);*/}
                {/*    }*/}
                {/*    return null;*/}
                {/*})}*/}
            </React.Fragment>
        );
    };

    const startObj = objects.find((o: { uuid: any; }) => o.uuid === uuid);
    if (startObj) {
        return renderChildren(startObj, layout, o_data, logic, resolved_data, data_types, resolvable_tags, tags);
    }

    return null;
};

export default RecursiveRenderer;

// <RecursiveRenderer objects={json_data.objects} uuid={100} />