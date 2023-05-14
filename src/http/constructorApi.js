import {$host} from "./index";

export const fetchProductsForConstructor = async (categoryId, subcategoryId)=>{
    const {data} = await $host.get('api/constructor', {
        params:{categoryId, subcategoryId}
    })
    return data
}