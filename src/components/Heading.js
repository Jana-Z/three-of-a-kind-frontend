import React from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import { addThreeCards } from '../api'
import { HowToPlayModule } from './HowToPlayModal';

const mapStatus = (status) => {
    switch (status) {
        case 'setSuccess': return 'success';
        case 'setFailed': return 'danger';
        default: return 'secondary'; 
    }
}

export class Heading extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            showHowToPlayModal: false,
        }
        this.addCards = this.addCards.bind(this);
    }

    addCards(){
        addThreeCards();
    }

    render(){
        const game = this.props.game;
        const gameState = this.props.gameState;
        console.log(game.players)
        return (
            <>
                <Alert variant={mapStatus(gameState.status)}>
                    <Alert.Heading>{gameState.message}</Alert.Heading>
                    <p>Remaining cards: {game.pileLength} </p>
                        Sets found so far:
                    <ListGroup horizontal>
                        {game.players.map((p,i) =>
                            <ListGroup.Item key={i}>
                                {p.score} by {p.name}
                            </ListGroup.Item>
                        )}
                    </ListGroup>
                    <div className="d-flex justify-content-end">
                    {
                        this.props.gameState.status === 'start' ? 
                        <Button variant={`outline-primary`} onClick={() => this.setState({showHowToPlayModal: true})}>
                            How to play
                        </Button>
                        :
                        <Button variant={`outline-${mapStatus(gameState.status)}`} onClick={this.addCards}>
                            Get three more cards
                        </Button>
                    }
                    </div>
                </Alert>
                <HowToPlayModule
                    show={this.state.showHowToPlayModal}
                    onHide={() => this.setState({showHowToPlayModal: false})}
                />
            </>
        )
    }
}
