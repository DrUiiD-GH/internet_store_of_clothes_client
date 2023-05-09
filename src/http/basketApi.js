import {$authHost, $host} from "./index";

export const fetchBasket = async ()=>{
    const {data} = await $authHost.get('api/basket')
    return data
}

export const putInBasket = async (product)=>{
    await $authHost.post('api/basket', product)
}

export const updateBasket = async (product)=>{
    const {data} = await $authHost.put('api/basket', product)
    return data
}


export const deleteBasket = async ()=>{
    const {data} = await $authHost.delete('api/basket')
    return data
}

