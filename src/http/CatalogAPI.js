import {$host} from "./index";

export const getCategories = async ()=>{
    const {data} = await $host.get('api/catalog/subcategories')
    return data
}

export const getProducts = async ()=>{
    const {data} = await $host.get('api/catalog/products')
    return data
}