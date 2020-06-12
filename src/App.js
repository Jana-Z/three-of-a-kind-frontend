import React from 'react';
import { Board } from './components/Board';
import { Heading } from './components/Heading';
import { Lobby } from './components/Lobby';
import { isConnected, getGame, getAllGames, getGameState } from './api';

// const socket = io();

class RemoteMultiplayerApp extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      connected: false,
      game: false,
      games: [],
      gameState: {},
      name: undefined,
    }
    // this.enterName = this.enterName.bind(this);
  }

  componentDidMount() {
    isConnected(() => {
      this.setState({ connected: true });
    });
    getGame((err, game) => {
      if (err) return;
      this.setState({ game: game })
    });
    getAllGames((err, games) => {
      if(err) return;
      this.setState({ games: games });
    });
    getGameState((err, gameState) => {
      if(err) return;
      this.setState({ gameState: gameState });
    });
  }

  
  render() {
    if (this.state.game) {
      return (
        <>
          <Heading game={this.state.game} gameState={this.state.gameState} />
          <Board game={this.state.game} />
        </>
      );
    }
    else {
      return (
        <>
          {this.state.connected
            ? <>
                <Lobby games={this.state.games} />
              </>
            : <p>Loading...</p>
          }
        </>
      )
    }
  }
}

export default RemoteMultiplayerApp;
