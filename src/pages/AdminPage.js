import React, {useContext, useEffect, useState} from 'react';
import {Button, Container} from "react-bootstrap";
import CreateProduct from "../components/modals/AdminModals/CreateProduct";
import CreateCategory from "../components/modals/AdminModals/CreateCategory";
import CreateSubcategory from "../components/modals/AdminModals/CreateSubcategory";
import {observer} from "mobx-react-lite";
import {Context} from "../index";

import {fetchCategories, fetchProducts} from "../http/CatalogAPI";


const AdminPage = observer(() => {
    const [catVis, setCatVis] = useState(false)
    const [subcatVis, setSubcatVis] = useState(false)
    const [proVis, setProVis] = useState(false)

    const {category}= useContext(Context)

    useEffect(()=>{
        fetchCategories().then(data=>category.setCategories(data))
    }, [])


    return (
        <Container style={{minHeight:'900px'}} className={'d-flex flex-column'}>
            <Button variant={"outline-dark"} className={'mt-4 p-2'} onClick={()=>setCatVis(true)}>Добавить категорию</Button>
            <Button variant={"outline-dark"} className={'mt-4 p-2'} onClick={()=>setSubcatVis(true)}>Добавить подкатегорию</Button>
            <Button variant={"outline-dark"} className={'mt-4 p-2'} onClick={()=>setProVis(true)}>Добавить продукт</Button>
            <CreateCategory  show={catVis} onHide={()=>setCatVis(false)}/>
            <CreateSubcategory show={subcatVis} onHide={()=>setSubcatVis(false)}/>
            <CreateProduct show={proVis} onHide={()=>setProVis(false)}/>
        </Container>
    );
});

export default AdminPage;