import {$authHost} from "./index";

export const fetchOrders = async ()=>{
    const {data} = await $authHost.get('api/orders')
    return data
}

export const cancelOrderById = async (order)=>{
    const {data} = await $authHost.delete('api/orders', {data:order})
    return data
}
