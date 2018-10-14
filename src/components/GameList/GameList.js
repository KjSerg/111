import React from 'react';

const GamesList = ({data}) => {
	<ul className='GameList'>
		data.map(({id, playerName, points, time}) =>(
			<li key={id}>
	          <div className="name">Ім'я: {playerName}</div>
	          <div className="result">Результат: {points}</div>
	          <div className="time">Час: {time}</div>
	        </li>
		});	
	</ul>
);

export default GamesList;