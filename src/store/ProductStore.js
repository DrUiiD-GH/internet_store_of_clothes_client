import {makeAutoObservable} from "mobx";

export default class ProductStore{
    constructor() {
        this._products = [
            {id: '1', name: 'Носки тёплые', price: '700', subcategoryId: '8', img: [
                    {id:'1', img:'/img/pic/card-prev.png'},
                    {id:'2', img:'/img/pic/card-prev.png'},
                    {id:'3', img:'/img/pic/card-prev.png'},
                    {id:'4', img:'/img/pic/card-prev.png'}
                ]},
            {id: '2', name: 'Трусы чёрные', price: '650', subcategoryId: '7', img: [
                    {id:'1', img:'/img/pic/card-prev.png'},
                    {id:'2', img:'/img/pic/card-prev.png'},
                    {id:'3', img:'/img/pic/card-prev.png'},
                    {id:'4', img:'/img/pic/card-prev.png'}
                ]},
            {id: '3', name: 'Футболка чистая', price: '1400', subcategoryId: '2', img: [
                    {id:'1', img:'/img/pic/card-prev.png'},
                    {id:'2', img:'/img/pic/card-prev.png'},
                    {id:'3', img:'/img/pic/card-prev.png'},
                    {id:'4', img:'/img/pic/card-prev.png'}
                ]}

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