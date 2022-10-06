import {fetch} from "@tauri-apps/api/http";


export default async function pStreamExtractor(url){
    const request = await fetch(url,{
        method:"GET",
    });
    const link = request.data.url
    return link;
}