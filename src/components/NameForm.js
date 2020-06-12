import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';

export class NameForm extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            validated: false,
            name: '',
        }
        this.checkInput = this.checkInput.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.enterName = this.enterName.bind(this);
    }

    handleChange(e) {
        e.preventDefault();
        e.stopPropagation();
        const target = e.target;
        const value = target.value;
        this.setState({
            name: value
        });
    }

    enterName = (e) => {
        this.props.enterName(this.state.name, e);
    }

    checkInput(e) {
        const form = e.currentTarget;
        if (form.checkValidity() === false){
            e.preventDefault();
            e.stopPropagation();
        }
        else {
            this.enterName(e);
        }
        this.setState({
            validated: true,
        });
    }

    render() {
        return (
            <Modal
                show={this.props.show}
                size="lg"
                centered
                >
                <Modal.Header>
                <Modal.Title>
                    Play Set!
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h5>Choose a name</h5>
                    <Form noValidate validated={this.state.validated} onSubmit={(e) => this.checkInput(e)}>
                        <Form.Row>
                            <Col sm={4}>
                            <Form.Label htmlFor="username">
                                Name:
                            </Form.Label>
                            </Col>
                            <Col>
                                <Form.Control
                                    id="username"
                                    type="text"
                                    onChange={this.handleChange}
                                    required/>
                            </Col>
                        </Form.Row>
                        <Button variant="outline-success" type="submit">Submit</Button>
                    </Form>
                </Modal.Body>
            </Modal>
        );
    }
}