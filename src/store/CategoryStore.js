import {makeAutoObservable} from "mobx";

export default class CategoryStore{
    constructor() {
        this._categories = []
        this._types = [
            {id:1, name:'торс верх'},
            {id:2, name:'торс низ'},
            {id:3, name:'ноги верх'},
            {id:4, name:'ноги низ'},
            {id:5, name:'стопы верх'},
            {id:6, name:'стопы низ'}
        ]
        this._selectedCategoryId = ''
        this._selectedSubcategoryId = ''
        makeAutoObservable(this)
    }

    setCategories(categories){
        this._categories = categories
    }

    setSelectedCategoryId(categoryId){
        this._selectedCategoryId = categoryId
    }
    setSelectedSubcategoryId(subcategoryId){
        this._selectedSubcategoryId = subcategoryId
    }

    get categories(){
        return this._categories
    }
    get types(){
        return this._types
    }

    get selectedCategoryId(){
        return this._selectedCategoryId
    }

    get selectedSubcategoryId(){
        return this._selectedSubcategoryId
    }

}