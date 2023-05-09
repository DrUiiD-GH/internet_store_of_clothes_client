import {$authHost, $host} from "./index";

export const fetchCategories = async ()=>{
    const {data} = await $host.get('api/catalog/subcategories')
    return data
}

export const fetchProducts = async (categoryId, subcategoryId, page, limit=12)=>{
    const {data} = await $host.get('api/catalog/products', {
        params:{categoryId, subcategoryId, page, limit}
    })
    return data
}

export const fetchOneProduct = async (id)=>{
    const {data} = await $host.get('api/catalog/products/' + id)
    return data
}

export const createCategory = async (category)=>{
    const {data} = await $authHost.post('api/catalog/categories', category)
    return data
}

export const createSubcategory = async (subcategory)=>{
    const {data} = await $authHost.post('api/catalog/subcategories', subcategory)
    return data
}

export const creteProduct = async (product)=>{
    const {data} = await $authHost.post('api/catalog/products', product)
    return data
}