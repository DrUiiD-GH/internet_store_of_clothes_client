import React, {useEffect, useState} from 'react';
import {Col, Container, Row, Spinner} from "react-bootstrap";
import ImgOverview from "../components/ItemPageComponents/ImgOverview/ImgOverview";
import BuyCard from "../components/ItemPageComponents/BuyCard/BuyCard";
import ItemDescription from "../components/ItemPageComponents/ItemDescription/ItemDescription";
import {useParams} from "react-router-dom";
import {fetchOneProduct} from "../http/CatalogAPI";
import {observer} from "mobx-react-lite";

const ItemPage = () => {
    const [product, setProduct] = useState({
        description:'Нет описания',
        info:[],
        imgs:[]
    })
    const {id} = useParams()
    const [isLoading, setIsLoading] = useState(true)

    useEffect( () => {
        fetchOneProduct(id).then(
            data => {
                setProduct(data)
            }
        ).finally(()=>{setIsLoading(false)})
    }, [])

    if(isLoading){
        return <Container style={{minHeight:'900px'}}></Container>
    }


    return (
        <Container style={{minHeight:'900px'}}>
            <Row>
                <Col md={8}>
                    <ImgOverview imgs={product.imgs === [] ?
                        product.imgs
                        :
                        [{
                            id: '1',
                            src: ''
                        }]

                    }/>
                    <ItemDescription info={product.info} description={product.description}/>
                </Col>
                <Col md={4} style={{position:"relative"}}>
                    <BuyCard product={product}/>
                </Col>
            </Row>
        </Container>
    );
};

export default ItemPage;