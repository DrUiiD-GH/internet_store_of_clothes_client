import React, {useContext, useEffect, useState} from 'react';
import styles from './ConstructorCatalog.module.css'
import {Form} from "react-bootstrap";
import ConstructorCard from "../ConstructorCard/ConstructorCard";
import {observer} from "mobx-react-lite";
import {Context} from "../../../index";
import {fetchProductsForConstructor} from "../../../http/constructorApi";
import {useNavigate} from "react-router-dom";
import {ITEM_ROUTE} from "../../../utils/consts";
import {putInBasket} from "../../../http/basketApi";
import {fetchCategories} from "../../../http/catalogAPI";


const ConstructorCatalog = observer(() => {
    const {constructor, user, category} = useContext(Context)
    const navigate = useNavigate()
    const [subcat, setSubcat] = useState([])

    useEffect(()=>{
        fetchProductsForConstructor(null, null).then(data=>{
            constructor.setProducts(data)
        })
        fetchCategories().then(data=>category.setCategories(data))

    }, [])

    const isDressed = (id)=>{
        return constructor.productsOnModel.find(i => i.id === id)
    }


    const addOnModel = (prod)=>{

        if(!isDressed(prod.id)){
            constructor.setProductsOnModel([prod, ...constructor.productsOnModel])
        }
    }

    const openProduct = (id)=>{
        navigate(ITEM_ROUTE + '/' + id)
    }

    const addInBasket = (productId)=>{
        if(user.isAuth){
            putInBasket({productId}).then(() =>{
                alert('Товар добавлен')
            })
        }else {
            alert('Не авторизован')
        }
    }

    const chooseByCategory = (id) => {
        const cat = category.categories.filter(i => i.id === Number(id))[0]
        if (cat){
            setSubcat(cat.subcategories)
            fetchProductsForConstructor(id, null).then(data=>
                constructor.setProducts(data)
            )
        }else {
            setSubcat([])
            fetchProductsForConstructor(null, null).then(data=>
                constructor.setProducts(data)
            )
        }
    }
    const chooseBySubcategory = (id) => {
        if(id>0){
            fetchProductsForConstructor(null, id).then(data=>
                constructor.setProducts(data)
            )
        }
    }




    return (
        <div className={styles.catalog__wrap}>
            <div className={styles.catalog__title}>
                <Form.Select
                    className={styles.selector}
                    onChange={e=>chooseByCategory(e.target.value)}
                >
                    <option value={0}>Категория</option>
                    {
                        category.categories.map(categoryItem => <option
                            value={categoryItem.id}
                            key={categoryItem.id}
                        >
                                {categoryItem.name}
                        </option>
                        )
                    }
                </Form.Select>
                <Form.Select
                    className={styles.selector}
                    disabled={!subcat.length>0}
                    onChange={e=>chooseBySubcategory(e.target.value)}
                >
                    <option value={0}>
                        Подкатегория
                    </option>
                    {
                        subcat.map(i => <option
                            value={i.id}
                            key={i.id}
                        >
                            {i.name}
                        </option>
                    )}
                </Form.Select>
            </div>
            <div className={styles.catalog__list}>
                {constructor.products.map(prod=>
                    <ConstructorCard
                        product={prod}
                        key={prod.id}
                        onClickInfo={()=>openProduct(prod.id)}
                        onClickBasket={()=>addInBasket(prod.id)}
                        onClickCard={()=>addOnModel(prod)}
                        disable={isDressed(prod.id)}
                    />
                )
                }
            </div>

        </div>
    );
});

export default ConstructorCatalog;