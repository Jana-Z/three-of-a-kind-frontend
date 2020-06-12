import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { PlayingCard } from './PlayingCard';
import { claimSet, startGame } from '../api'


export class Board extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      clicked: [],
    };

    this.renderCard = this.renderCard.bind(this);
    this.handleClickCard = this.handleClickCard.bind(this);

  }

  componentDidUpdate(prevProps, prevState){
    if(this.state.clicked.length === 3 && this.state.clicked !== prevState.clicked){
      claimSet(this.state.clicked);
      this.setState({
        clicked: [],
      });
    }
  }

  handleClickCard(card){
    this.setState((state) => {
      let c = [...state.clicked];
      if(!(c.includes(card))){
        c.push(card);
        // Add new card
        return {
          clicked: c,
        };
      }
      // Card is already selected -> Remove
      else {
        c.splice(c.indexOf(card), 1);
        return {
          clicked: c,
        };
      }
    });
  };

  renderCard(card, idx){
    if (card) {
      return (
        <PlayingCard
          color={card.color}
          amount={card.amount}
          filling={card.filling}
          shape={card.shape}
          inFocus={this.state.clicked.includes(card)}
          key={idx}
          onClick={() => this.handleClickCard(card)}
        />
        );
    }
  };

  render () {
    let deck = [...this.props.game.deck];
    return (
      <div style={{backgroundColor: '#e9ecef', padding: '1em'}}>
        {this.props.game.gameActive ? 
          <Row xs={2} md={3} lg={4}>
            {deck.map((card, idx) => 
                <Col style={{ alignItems: 'center' }} key={idx}>
                  {this.renderCard(card, idx)}
                </Col>
            )}
          </Row>
        :
          <Button onClick={startGame}>Start Game</Button>
        }
      
      </div>
    );
  }
};