import React, { Component } from 'react';
import HeaderApp from './components/header/Header.js';
import GameWrap from './components/gameWrap/gameWrap.js';

import './App.css';

import { createStore } from 'redux';

import {reducer} from 'reducer';

const store = createStore(reducer);

class App extends Component {
  render() {
    return (
      <div>
        <HeaderApp />
        <GameWrap />
        
      </div>
      );
    }
  }

export default App;
