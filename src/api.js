import openSocket from 'socket.io-client';

const socket = openSocket('http://localhost:8000');

export const isConnected = (cb) => {
    socket.on("connected", () => cb(null));
};

export const getAllGames = (cb) => {
    socket.on('games', games => cb(null, games));
    socket.emit('getAllGames');
};

export const createNewGame = (gameName, isPrivate) => {
    socket.emit('createNewGame', { name: gameName, isPrivate: isPrivate });
};

export const getGame = (cb) => {
    socket.on('gameValues', gameValues => cb(null, gameValues));
    socket.emit('getGame');
};

export const getGameState = (cb) => {
    socket.on('gameState', gameState => cb(null, gameState));
    socket.emit('getGameState');
}

export const joinGame = (gameName) => {
    socket.emit('joinGame', gameName);
};

export const addThreeCards = () => {
    socket.emit('addThreeCards');
};

export const claimSet = (cards) => {
    socket.emit('claimSet', cards);
};

export const setName = (name) => {
    socket.emit('setName', name);
};

export const startGame = () => {
    socket.emit('startGame');
}

///////////////////////////////////////////////

// export const getDeck = (cb) => {
//     socket.on('deck', deck => cb(null, deck));
//     socket.emit('getDeck');
// };

// export const getName = (cb) => {
//     socket.on('name', name => cb(null, name));
// };

// export const getPlayers = (cb) => {
//     socket.on('players', players => cb(null, players));
// };

// export const getPileLen = (cb) => {
//     socket.on('pile', pile => cb(null, pile));
//     socket.emit('getPileLen');
// };
