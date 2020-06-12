import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { PlayingCard } from './PlayingCard';

export class HowToPlayModule extends React.Component {

    render() {
        return (
            <>
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
                        {/* <h5>Not implemented yet.</h5> */}
                        <h5>How to play.</h5>
                        <p>Set is traditionally a card game.</p>
                        <p>
                            Each card has symbols with four distinct features on it:
                            the amount, the color, the shape and the filling of the symbols.
                            You have to find three cards, such that either all features are the same for all cards
                            or each card has a different feature.
                            So:
                        </p>
                        <Row md={3}>
                            <Col style={{ alignItems: 'center' }}>
                                <PlayingCard 
                                    color={'#48b0ba'}
                                    amount={1}
                                    filling={'full'}
                                    shape={'square'}
                                />
                            </Col>
                            <Col style={{ alignItems: 'center' }}>
                                <PlayingCard 
                                    color={'#48b0ba'}
                                    amount={2}
                                    filling={'full'}
                                    shape={'square'}
                                />
                            </Col>
                            <Col style={{ alignItems: 'center' }}>
                                <PlayingCard 
                                    color={'#48b0ba'}
                                    amount={3}
                                    filling={'full'}
                                    shape={'square'}
                                />
                            </Col>
                        </Row>
                        Is a set, but this is no set (since the shapes dont align):
                        <Row md={3}>
                            <Col style={{ alignItems: 'center' }}>
                                <PlayingCard 
                                    color={'#48b0ba'}
                                    amount={1}
                                    filling={'full'}
                                    shape={'circle'}
                                />
                            </Col>
                            <Col style={{ alignItems: 'center' }}>
                                <PlayingCard 
                                    color={'#48b0ba'}
                                    amount={2}
                                    filling={'full'}
                                    shape={'square'}
                                />
                            </Col>
                            <Col style={{ alignItems: 'center' }}>
                                <PlayingCard 
                                    color={'#48b0ba'}
                                    amount={3}
                                    filling={'full'}
                                    shape={'square'}
                                />
                            </Col>
                        </Row>
                        Just, find more sets than your opponents and you win.
                    </Modal.Body>
                </Modal>
            </>
        );
    }
}