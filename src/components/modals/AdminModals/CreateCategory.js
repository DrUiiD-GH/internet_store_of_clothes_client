import React, {useContext, useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import {createCategory} from "../../../http/catalogAPI";
import {Context} from "../../../index";

const CreateCategory = ({show, onHide}) => {
    const [catName, setCatName] = useState('')
    const {category} = useContext(Context)
    const addCategory = ()=>{
        createCategory({name: catName}).then(data=>{
            setCatName('')
            category.setCategories(data)
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
                    Добавить категорию
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        placeholder={'Введите название категории'}
                        value={catName}
                        onChange={e=>setCatName(e.target.value)}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={"outline-success"} onClick={addCategory}>Добавить</Button>
                <Button variant={"outline-danger"} onClick={onHide}>Закрыть</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateCategory;