import {$authHost, $host} from "./index";
import jwt_decode from 'jwt-decode'

export const registration = async (email, password)=>{
    const {data} = await $host.post('api/user/registration', {email, password})
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const login = async (email, password)=>{
    const {data} =  await $host.post('api/user/login', {email, password})
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const check = async ()=>{
    const {data} = await $authHost.get('api/user/auth')
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const getUserInfo = async ()=>{
    const {data} = await $authHost.get('api/user/info')
    return data
}

export const changeName = async (name)=>{
    const {data} = await $authHost.put('api/user/changeInfo/name', {name})
    return data
}

export const changeEmail = async (email)=>{
    const {data} = await $authHost.put('api/user/changeInfo/email', {email})
    return data
}

export const changePhone = async (phoneNumber)=>{
    const {data} = await $authHost.put('api/user/changeInfo/phone', {phoneNumber})
    return data
}

export const changeAddress = async (address)=>{
    const {data} = await $authHost.put('api/user/changeInfo/address', {address})
    return data
}
export const changePassword = async (oldPassword, newPassword)=>{
    const {data} = await $authHost.put('api/user/changeInfo/password', {oldPassword, newPassword})
    return data
}