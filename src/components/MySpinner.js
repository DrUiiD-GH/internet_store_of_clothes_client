import React from 'react';
import {Container, Spinner} from "react-bootstrap";

const MySpinner = () => {
    return (
        <Container style={{height:900}} className="d-flex justify-content-center align-items-center"><Spinner animation={"grow"} className={'m-auto'}/></Container>
    );
};

export default MySpinner;