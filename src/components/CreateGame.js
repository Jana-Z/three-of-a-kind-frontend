import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
// import InputGroup from 'react-bootstrap/InputGroup';
import { createNewGame } from '../api';

export class CreateGame extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            validated: false,
            gameName: '',
            privateGame: false,
        }
        this.checkInput = this.checkInput.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        e.preventDefault();
        e.stopPropagation();
        const target = e.target;
        const value = target.value;
        this.setState({
            gameName: value
        });
    }

    checkInput(e) {
        const form = e.currentTarget;
        if (form.checkValidity() === false){
            e.preventDefault();
            e.stopPropagation();
        }
        else {
            // setName(this.state.hostName);
            e.stopPropagation();
            createNewGame(this.state.gameName, this.state.privateGame);
        }
        this.setState({
            validated: true,
        });
    }

    render() {
        return (
            <Modal
                {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                >
                <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Play Set!
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h5>Create A New Game</h5>
                    <Form noValidate validated={this.state.validated} onSubmit={(e) => this.checkInput(e)}>
                        <Form.Row>
                            <Col sm={4}>
                            <Form.Label htmlFor="gameName">
                                Name of the game:
                            </Form.Label>
                            </Col>
                            <Col>
                                <Form.Control
                                    id="gameName"
                                    type="text"
                                    onChange={this.handleChange}
                                    name="gameName"
                                    required/>
                                <Form.Control.Feedback type="invalid">
                                    Please choose a game name.
                                </Form.Control.Feedback>
                            </Col>
                        </Form.Row>
                        <Form.Group>
                            <Form.Check type="checkbox" label="Private Game (Please remember your name)" onChange={() => this.setState(state =>{
                            return {
                                privateGame: !state.privateGame,
                            }})}/>
                        </Form.Group>
                        <Button variant="outline-success" type="submit">Create</Button>
                    </Form>
                </Modal.Body>
            </Modal>
        );
    }
}