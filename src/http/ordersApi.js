import {$authHost} from "./index";

export const fetchOrders = async ()=>{
    const {data} = await $authHost.get('api/orders')
    return data
}

export const cancelOrderById = async (order)=>{
    const {data} = await $authHost.delete('api/orders', {data:order})
    return data
}

export const addOrder = async ()=>{
    const {data} = await $authHost.post('api/orders')
    return data
}
