import {marked} from "marked";

const richTextReducer = (rawRichText: any) => {
    if(rawRichText)
        return marked.parse(rawRichText);
    else return;
}
export default richTextReducer
