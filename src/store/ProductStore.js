import {makeAutoObservable} from "mobx";

export default class ProductStore{
    constructor() {
        this._products = [
            {id: '1', name: 'Носки тёплые', price: '700', subcategoryId: '8', img: []},
            {id: '2', name: 'Трусы чёрные', price: '650', subcategoryId: '7', img: []},
            {id: '3', name: 'Футболка чистая', price: '1400', subcategoryId: '2', img: []},
            {id: '4', name: 'Брюки деловые', price: '5000', subcategoryId: '3', img: []},
            {id: '5', name: 'Рубашка с рукавом', price: '2500', subcategoryId: '3', img: []},
            {id: '6', name: 'Футболка в полоску', price: '1300', subcategoryId: '1', img: []},
            {id: '7', name: 'Куртка лёгкая', price: '6100', subcategoryId: '5', img: []}
        ]
        makeAutoObservable(this)
    }

    setProducts(products){
        this._products = products
    }
    get products(){
        return this._products
    }
}