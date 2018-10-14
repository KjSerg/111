import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import GameWrap from '../components/GameWrap/GameWrap';
import PlayerName from '../components/PlayerName/PlayerName';
import MenuPause from '../components/menu/MenuPause';

import { SetPlayerName, startGame, pauseGame } from '../redux/actions/Actions';

import { createStore } from 'redux';
import reducer from 'reducer';

const store = createStore(reducer);
console.log(store);



class Game extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: props.playerName
		};
	}

	playerNameChange = e => 
		this.setState({
			name: e.target.value
		});

	componentDidUpdate(prevProps) {
		const { playerName, startGame } = this.props;
		if(!prevProps.playerName && playerName) {
			startGame();
		}
	}

	interactionHandler = e => {
		const { paused, startGame, pauseGame } = this.props;
		switch (e.key) {
			case 'ArrowUp':
				break;
			case 'ArrowLeft':
				break;
			case 'ArrowRight':
				break;
			case 'ArrowDown':
				break;
			case 'Escape':
				if (paused) {
					statGame();
				} else {
					pauseGame();
				}
				break;
			default:
				break;
		}
	};

	componentDidMount() {
		document.documentElement.addEventListener('keydown', this.interactionHandler);
	}

	componentWillUnmount() {
		document.documentElement.removeEventListener('keydown', this.interactionHandler);
	}

	render() {
		const { matrix, playerName, paused, startGame } = this.props;
		const { name } = this.state;

		return (
			<GameWrap matrix={matrix}>
				{paused && 
					!playerName && (
						<PlayerName
							value={name}
							onChange={this.playerNameChangeHandler}
	              			onStartGame={this.startGameClickHandler}
              			/>
					)}
				{paused && playerName && <PauseMenu onResume={startGame} />}
			</GameWrap>
		);
	}
}

const mapStateToProps = ({ gameSt }) => ({
	...gameSt
});

const mapDispatchToProps = dispatcher => 
	bindActionCreators(
		{
			PlayerName,
      		startGame,
      		pauseGame,
		},
		dispatcher,
	);

export default connect(
	mapStateToProps, 
	mapDispatchToProps,
)(gameCont);