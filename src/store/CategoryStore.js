import {makeAutoObservable} from "mobx";

export default class CategoryStore{
    constructor() {
        this._category = [
            {
                id: '1', name: 'Одежда', subcategories: [
                    {id: '1', name: 'Рубашки'},
                    {id: '2', name: 'Футболки'},
                    {id: '3', name: 'Брюки'}
                ]
            },
            {
                id: '2', name: 'Верхняя одежда', subcategories: [
                    {id: '4', name: 'Пуховики'},
                    {id: '5', name: 'Куртки'},
                    {id: '6', name: 'Ветровки'}
                ]
            },
            {
                id: '3', name: 'Нижнее бельё', subcategories: [
                    {id: '7', name: 'Трусы'},
                    {id: '8', name: 'Носки'},
                    {id: '9', name: 'Майки'}
                ]
            },
        ]
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