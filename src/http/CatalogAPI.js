import {$host} from "./index";

export const fetchCategories = async ()=>{
    const {data} = await $host.get('api/catalog/subcategories')
    return data
}

export const fetchProducts = async ()=>{
    const {data} = await $host.get('api/catalog/products')
    return data
}

export const fetchOneProduct = async (id)=>{
    const {data} = await $host.get('api/catalog/products/' + id)
    return data
}