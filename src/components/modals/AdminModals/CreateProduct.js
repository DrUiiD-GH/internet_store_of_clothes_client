import React, {useContext, useState} from 'react';
import {Button, Col, Dropdown, Form, Modal, Row} from "react-bootstrap";
import {Context} from "../../../index";

const CreateProduct = ({show, onHide}) => {
    const {category} = useContext(Context)
    const [selectedCat, setSelectedCat] = useState([]);

    const [info, setInfo] = useState([]);
    const [catImgs, setCatImgs] = useState([]);
    const [descriptionProd, setDescriptionProd] = useState('');


    const addInfo = () =>{
        setInfo([...info, {title: '', description: '', number: Date.now()}])
    }
    const removeInfo = (number) =>{
        setInfo(info.filter(i=>i.number !== number))
    }

    const addCatImgs = () =>{
        setCatImgs([...catImgs, {src: '', number: Date.now()}])
    }
    const removeCatImgs = (number) =>{
        setCatImgs(catImgs.filter(i=>i.number !== number))
    }


    return (
        <Modal
            show={show}
            onHide={onHide}
            size={'lg'}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить товар
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        placeholder={'Введите название товара'}
                    />

                    <Dropdown className={'mt-2'}>
                        <Dropdown.Toggle>Выбирите категорию</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {category.categories.map(cat=>
                                <Dropdown.Item
                                    key={cat.id}
                                    onClick={()=>setSelectedCat(cat.subcategories)}
                                >
                                    {cat.name}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>

                    <Dropdown className={'mt-2'}>
                        <Dropdown.Toggle>Выбирите подкатегорию</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {
                                selectedCat.map(sub=>
                                <Dropdown.Item
                                    key={sub.id}
                                >
                                    {sub.name}
                                </Dropdown.Item>
                                )
                            }
                        </Dropdown.Menu>
                    </Dropdown>
                    <Form.Label className='mt-2'>Цена товара</Form.Label>
                    <Form.Control type='number'/>
                    <hr/>

                    <Form.Label>Описание товара</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        value={descriptionProd}
                        onChange={e=>setDescriptionProd(e.target.value)}
                    />

                    <Button
                        variant={'outline-dark'}
                        className={'mt-2'}
                        onClick={addInfo}
                    >
                        Добавить новое свойство
                    <
                    /Button>
                    {info.map(i =>
                            <Row className={'mt-2'} key={i.number}>
                                <Col md={5}>
                                    <Form.Control
                                        placeholder={'Введите название'}
                                    />
                                </Col>
                                <Col md={5}>
                                    <Form.Control
                                        placeholder={'Введите описание'}
                                    />
                                </Col>
                                <Col md={1}>
                                    <Button
                                        variant={'outline-danger'}
                                        onClick={()=>removeInfo(i.number)}
                                    >
                                        Удалить
                                    </Button>
                                </Col>
                            </Row>
                        )
                    }

                    <hr/>

                    <Form.Label>Фотографии товара</Form.Label>
                    <br/>

                    <Button
                        variant='outline-dark'
                        className='mt-2'
                        onClick={addCatImgs}
                    >
                        Добавить фотографию
                    </Button>

                    {catImgs.map(i=>
                        <Row className={'mt-2'} key={i.number}>
                            <Col md={3} className={'d-flex align-items-center '}>
                                <h2 style={{fontSize:18}}>Изображение {i.number}</h2>
                            </Col>
                            <Col md={7}>
                                <Form.Control
                                    className={'mt-2'}
                                    type="file"
                                    onChange={e => console.log(e.target.value) }
                                />
                            </Col>
                            <Col md={2}>
                                <Button
                                    variant='outline-danger'
                                    onClick={()=>removeCatImgs(i.number)}
                                >
                                    Удалить
                                </Button>
                            </Col>
                        </Row>
                    )
                    }

                    <hr/>

                    <Row>
                        <Col md={3} className={'d-flex align-items-center '}>
                            <h2 style={{fontSize:18}}>Изображение для конструктора</h2>
                        </Col>
                        <Col md={9}>
                            <Form.Control
                                className={'mt-2'}
                                type="file"
                            />
                        </Col>
                    </Row>



                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={"outline-success"} onClick={onHide}>Добавить</Button>
                <Button variant={"outline-danger"} onClick={onHide}>Закрыть</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateProduct;