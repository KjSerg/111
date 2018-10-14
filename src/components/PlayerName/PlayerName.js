import React from 'react';
import './PlayerNameForm.css';

const PlayerName = ( { value, onChange, StartGame } ) => (
	<form className="player-name-form"
	onSubmit = {e => {
		e.preventDefault();
		StartGame();
	}}>
	<label htmlFor="player-name">Введіть ім'я:</label>
    <input type="text" id="player-name" value={value} onChange={onChange} required />
    <button>Грати</button>
  </form>

);

export default PlayerName;