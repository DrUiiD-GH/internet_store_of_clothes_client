import {makeAutoObservable} from "mobx";

export default class CategoryStore{
    constructor() {
        this._category = []
        this._selectedCategoryId = '1'
        this._selectedSubcategoryId = ''
        makeAutoObservable(this)
    }

    setCategories(categories){
        this._category = categories
    }

    setSelectedCategoryId(categoryId){
        this._selectedCategoryId = categoryId
    }
    setSelectedSubcategoryId(subcategoryId){
        this._selectedSubcategoryId = subcategoryId
    }

    get categories(){
        return this._category
    }

    get selectedCategoryId(){
        return this._selectedCategoryId
    }

    get selectedSubcategoryId(){
        return this._selectedSubcategoryId
    }

}