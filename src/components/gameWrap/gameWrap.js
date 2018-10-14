import React from 'react';

import './gameWrap.css';


const GameWrap = ({matrix = [], children}) => {
	let hasChildren = false;
	if (children) {
		hasChildren = true;
		if (children.length) {
			hasChildren = children.reduce((acc, child) => acc || child);
		}
	}	



	return (
		<div className='box'>
			<div className='box-items'>
				{
					matrix.map((line, y) => 
						line.map((cel, x) => 
							<div key={`${x}.${y}`} className={`square ${cel ? 'full' : ''}`} />
						)
					)
				}
			</div>
			{hasChildren && <div className="overlay">{children}</div>}
		</div>
	);
};

export default GameWrap;