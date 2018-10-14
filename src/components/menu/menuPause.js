import React from 'react';

import './menu.css';

// const resume = () => {
	
// };

const MenuPause = ({onResume}) => (
	<div className='MenuPauseCont'>
		<div className='MenuPause'>
			<button onClick={onResume} className='butt'>Продовжити</button>
			<a href='#' className='butt'> Головне меню </a>
		</div>
	</div>
);




export default MenuPause;