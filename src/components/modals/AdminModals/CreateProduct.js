import React, {useContext, useState} from 'react';
import {Button, Col, Dropdown, Form, Modal, Row} from "react-bootstrap";
import {Context} from "../../../index";
import {observer} from "mobx-react-lite";
import {creteProduct} from "../../../http/catalogAPI";



const CreateProduct = observer(({show, onHide}) => {
    const {category} = useContext(Context)
    const [selectedCat, setSelectedCat] = useState({name:'', subcategories:[]});
    const [selectedSubcat, setSelectedSubcat] = useState({name:''});


    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)

    const [descriptionProd, setDescriptionProd] = useState('');
    const [constImg, setConstImg] = useState(null);

    const [info, setInfo] = useState([]);
    const [catImgs, setCatImgs] = useState([]);




    const addInfo = () =>{
        setInfo([...info, {title: '', description: '', number: Date.now()}])
    }
    const removeInfo = (number) =>{
        setInfo(info.filter(i=>i.number !== number))
    }
    const changeInfo = (key, value, number)=>{
        setInfo(info.map(i=>i.number===number? {...i, [key]:value} : i))
    }


    const addCatImgs = () =>{
        setCatImgs([...catImgs, {file:null, number: Date.now()}])
    }
    const removeCatImgs = (number) =>{
        setCatImgs(catImgs.filter(i=>i.number !== number))
    }
    const changeCatImgs = (value, number)=>{
        setCatImgs(catImgs.map(i=>i.number===number? {...i, file:value} : i))
    }
    const selectFile = e =>{
        console.log(e.target.files)
    }



    const addProduct = () =>{
        const formData = new FormData()
        formData.append('name', name)
        formData.append('price', `${price}`)
        formData.append('subcategoryId', selectedSubcat.id)
        formData.append('description', descriptionProd)
        formData.append('imgConstructor', constImg)
        formData.append('info', JSON.stringify(info))
        catImgs.map(i=>formData.append('imgsCatalog', i.file))

        creteProduct(formData).then(data=>{
            setName('')
            setPrice(0)
            setDescriptionProd('')


        })
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
                        value={name}
                        onChange={e=>setName(e.target.value)}
                    />

                    <Dropdown className={'mt-2'}>
                        <Dropdown.Toggle>{selectedCat.name || "Выбирите категорию"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {category.categories.map(cat=>
                                <Dropdown.Item
                                    key={cat.id}
                                    onClick={()=>setSelectedCat(cat)}
                                >
                                    {cat.name}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>

                    <Dropdown className={'mt-2'}>
                        <Dropdown.Toggle>{selectedSubcat.name || "Выбирите подкатегорию"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {
                                selectedCat.subcategories.map(sub=>
                                <Dropdown.Item
                                    key={sub.id}
                                    onClick={()=>setSelectedSubcat(sub)}
                                >
                                    {sub.name}
                                </Dropdown.Item>
                                )
                            }
                        </Dropdown.Menu>
                    </Dropdown>
                    <Form.Label className='mt-2'>Цена товара</Form.Label>
                    <Form.Control
                        type='number'
                        value={price}
                        onChange={e=>setPrice(Number(e.target.value))}
                    />
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
                                        value={i.title}
                                        onChange={e=>changeInfo('title', e.target.value, i.number)}
                                    />
                                </Col>
                                <Col md={5}>
                                    <Form.Control
                                        placeholder={'Введите описание'}
                                        value={i.description}
                                        onChange={e=>changeInfo('description', e.target.value, i.number)}
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
                                    onChange={e=>changeCatImgs(e.target.files[0], i.number)}
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
                                onChange={e=>setConstImg(e.target.files[0])}
                            />
                        </Col>
                    </Row>



                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={"outline-success"} onClick={addProduct}>Добавить</Button>
                <Button variant={"outline-danger"} onClick={onHide}>Закрыть</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default CreateProduct;