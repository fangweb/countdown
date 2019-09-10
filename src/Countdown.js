import React, { useReducer } from 'react';
import Control from './Control';
import Reader from './Reader';

const initialState = {
  countdownStateSeconds: 60,
  playing: false,
  paused: false
};

function reducer(state, action) {
  switch (action.type) {
    case 'updateCountdown':
      return {...state, countdownStateSeconds: action.payload.countdownStateSeconds};
    case 'play':
      return {...state, paused: false, playing: true};
    case 'pause':
      return {...state, paused: true, playing: false};
    case 'stop':
      return {...initialState};
    default:
      throw new Error("Invalid action type.");  
  }
}

function Countdown() {
  
  const [state, dispatch] = useReducer(reducer, initialState);
  
  return (
    <div className="countdown">
      <Reader state={state} />
      <Control state={state} dispatch={dispatch} />
    </div>
  );
}

export default Countdown;
