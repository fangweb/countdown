import React, { useReducer } from 'react';
import Control from './Control';
import Reader from './Reader';

const initialState = {
  countdownStateSeconds: 60,
  playing: false,
  startStateSeconds: 60
};

function reducer(state, action) {
  switch (action.type) {
    case 'addMinute': {
      const update = state.countdownStateSeconds + 60;
      return {...initialState, countdownStateSeconds: update, startStateSeconds: update};
    }
    case 'minusMinute': {
      const update = state.countdownStateSeconds - 60;
      if (update < 0) return state;     
      return {...initialState, countdownStateSeconds: update, startStateSeconds: update};     
    }
    case 'addSecond': {
      const update = state.countdownStateSeconds + 1;
      return {...initialState, countdownStateSeconds: update, startStateSeconds: update};
    } 
    case 'minusSecond': {
      const update = state.countdownStateSeconds - 1;
      if (update < 0) return state;      
      if (action.keepProgress) {
        return {...state, countdownStateSeconds: update};  
      }  
      else {
        return {...initialState, countdownStateSeconds: update, startStateSeconds: update};
      }               
    }
    case 'play': {
      return {...state, playing: !state.playing};
    }
    case 'reload':
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
