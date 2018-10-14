export const actionTypes = {
	PLAYER_NAME: 'PLAYER_NAME',
	START_GAME: 'START_GAME',
	PAUSE_GAME: 'PAUSE_GAME'
};

export const SetPlayerName = (playerName) => ({
	type: actionTypes.PLAYER_NAME,
	payload: {
		playerName
	}
});

export const startGame = () => ({
	type: actionTypes.START_GAME,
});

export const pauseGame = () => ({
	type: actionTypes.PAUSE_GAME,
});