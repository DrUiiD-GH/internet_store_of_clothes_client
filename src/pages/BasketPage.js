import React, {useContext, useEffect, useState} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import PositionsList from "../components/BasketPageComponents/PositionsList/PositionsList";
import BasketCard from "../components/BasketPageComponents/BasketCard/BasketCard";
import {observer} from "mobx-react-lite";
import {fetchBasket} from "../http/basketApi";
import {Context} from "../index";
import MySpinner from "../components/MySpinner";

const BasketPage = observer(() => {
    const {basket} = useContext(Context)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(()=>{
        fetchBasket().then(data=>basket.setBasket(data)).finally(()=>setIsLoading(false))
    }, [])

    if(isLoading) return <MySpinner/>

    return (
        <Container style={{minHeight:'900px'}}>
            <Row>
                <Col md={7}>
                    <PositionsList/>
                </Col>
                <Col md={5}>
                    <BasketCard/>
                </Col>
            </Row>
        </Container>
    );
});

export default BasketPage;