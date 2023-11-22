import { useState } from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { createType } from '../../http/deviceAPI';


const CreateType = ({ show, onHide }) => {
    const [value, setValue] = useState('')
    const addType = () => {
        createType({ name: value }).then(data => {
            setValue('')
            onHide()
        })
    }

    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>Добавить тип</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        placeholder='Введите название типа' />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button
                    onClick={onHide}
                    variant="outline-danger">Закрыть
                </Button>
                <Button
                    onClick={addType}
                    variant="outline-success">Добавить
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default CreateType;