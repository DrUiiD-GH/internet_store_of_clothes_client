import React, {useContext, useState} from 'react';
import {Button, Dropdown, Form, Modal} from "react-bootstrap";
import {Context} from "../../../index";
import {observer} from "mobx-react-lite";
import {createSubcategory} from "../../../http/catalogAPI";

const CreateSubcategory = observer(({show, onHide}) => {
    const {category} = useContext(Context)
    const [subcatName, setSubcatName] = useState('')
    const [selectedCat, setSelectedCat] = useState({name:''})
    const [selectedType, setSelectedType] = useState({name:''})

    const addSubcategory = ()=>{
        createSubcategory({name:subcatName, categoryId:selectedCat.id, typeId:selectedType.id}).then(data=>{
            category.setCategories(data)
            setSubcatName('')
            onHide()
        })

    }



    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить подкатегорию
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Dropdown>
                        <Dropdown.Toggle>{selectedCat.name || "Выбирите категорию"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {category.categories.map(cat=>
                                <Dropdown.Item
                                    key={cat.id}
                                    onClick={()=>{setSelectedCat(cat)}}
                                >
                                    {cat.name}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>

                    <Dropdown className={'mt-2'}>
                        <Dropdown.Toggle>{selectedType.name || "Выбирите тип"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {category.types.map(type=>
                                <Dropdown.Item
                                    key={type.id}
                                    onClick={()=>setSelectedType(type)}
                                >
                                    {type.name}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>

                    <Form.Control
                        placeholder={'Введите название подкатегории'}
                        className={'mt-3'}
                        value={subcatName}
                        onChange={e=>setSubcatName(e.target.value)}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={"outline-success"} onClick={addSubcategory}>Добавить</Button>
                <Button variant={"outline-danger"} onClick={onHide}>Закрыть</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default CreateSubcategory;