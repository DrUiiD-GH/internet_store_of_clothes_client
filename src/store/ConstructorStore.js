import {makeAutoObservable} from "mobx";

export default class ConstructorStore{
    constructor() {
        this._products=[]
        this._productsOnModel=[]
        makeAutoObservable(this)
    }

    setProducts(products){
        this._products = products
    }
    setProductsOnModel(products){
        this._productsOnModel = products
    }

    get products(){
        return this._products
    }
    get productsOnModel(){
        return this._productsOnModel
    }
}

