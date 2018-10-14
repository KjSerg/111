import React from 'react';


import './header.css';

const HeaderApp = ({player, result}) => {
	return (
		<header className='header'> 
			<table>
				<tbody>
					<tr>
						<td>Гравець:</td>
						<td> {player || '---'} </td>
					</tr>
					<tr>
						<td>Результат:</td>
						<td>{result || '---'}</td>
					</tr>
					<tr>
						<td>Час:</td>
						<td></td>
					</tr>
				</tbody>
			</table>
		</header>
	);
};

export default HeaderApp;

