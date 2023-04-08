import {makeAutoObservable} from "mobx";

export default class BasketStore{
    constructor() {
        this._basket = {
            id:'3',
            total_cost:'4500',
            product_baskets:[
                {
                    id:'4',
                    count:2,
                    product: {
                        id:'3',
                        name:'Футболка чистая',
                        price:'1400',
                        subcategoryName:'Футболка',
                        img_for_catalogs:[
                            {id:'1', url:''}
                        ]
                    }
                },
                {
                    id:'2',
                    count:1,
                    product: {
                        id:'2',
                        name:'Штаны грязные',
                        price:'1700',
                        subcategoryName:'Штаны',
                        img_for_catalogs:[
                            {id:'2', url:''}
                        ]
                    }
                },

            ]
        }
        makeAutoObservable(this)
    }

    setBasket(basket){
        this._basket=basket
    }

    get basket(){
        return this._basket
    }
}