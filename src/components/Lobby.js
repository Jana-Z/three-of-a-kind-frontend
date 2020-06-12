import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { CreateGame } from './CreateGame';
import { NameForm } from './NameForm'
import { joinGame, setName } from '../api';
import { JoinPrivateGame } from './JoinPrivateGame';

export class Lobby extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            showCreateGame: false,
            showJoinPrivateGame: false,
            showEnterName: false,
            gameToJoin: undefined,
        };
    }

    componentDidUpdate() {
        console.log(this.state);
    }

    render() {

        // functions also called from children

        let enterName = (name, e) => {
            e.preventDefault();
            e.stopPropagation();
            this.setState({ name: name });
            setName(name);
            joinGame(this.state.gameToJoin);
        }

        let setGameName = (name, e) => {
            if(e) {
                e.preventDefault();
                e.stopPropagation();
            }
            if(name) {
                this.setState({ gameToJoin: name,  showEnterName: true });
            }
        }

        return (
            <div style={{display: "flex", alignItems: "center", justifyContent: "center", flexDirection: 'column', padding: '2em'}}>
                <Card border="primary" style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Play Set</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{this.props.games.length !== 0 ? "Click to join a game" : "No open public games"}</Card.Subtitle>
                        <Card.Text>
                        <ListGroup variant="flush">
                            {this.props.games &&
                                this.props.games.map((g, i) =>
                                <ListGroup.Item key={i} action onClick={() => setGameName(g.name)}>
                                    <Row>
                                        <Col sm={6}>
                                            {g.name}
                                        </Col>
                                        <Col>
                                            {g.numberOfPlayers} players
                                        </Col>
                                    </Row>
                                </ListGroup.Item>)}
                        </ListGroup>
                        </Card.Text>
                        <Button variant="primary" onClick={() => this.setState({showCreateGame: true})}>Create new Game</Button>
                        <Button variant="link" size="sm" onClick={() => this.setState({showJoinPrivateGame: true})}>Join private game</Button>
                    </Card.Body>
                </Card>
                <CreateGame
                    show={this.state.showCreateGame}
                    onHide={() => this.setState({showCreateGame: false})}
                />
                <JoinPrivateGame show={this.state.showJoinPrivateGame}
                    onHide={() => this.setState({showJoinPrivateGame: false})}
                    setGameName={setGameName}
                />
                <NameForm show={this.state.showEnterName}
                    enterName={enterName}
                />
            </div>
        )
    }
}