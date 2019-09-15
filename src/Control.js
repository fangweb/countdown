import React from 'react';

let timerId = null;
let paused = false;

function startTimer(dispatch) {
  dispatch({ type: 'play' });
  dispatch({ type: 'minusSecond', keepProgress: true });
  timerId = setInterval(() => {
    if (!paused) {
      dispatch({ type: 'minusSecond', keepProgress: true });
    }
  }, 1000);
}

function togglePause(dispatch) {
  dispatch({ type: 'play' });
  paused = !paused;
}

function btnDispatch({ dispatch, playing, type }) {
  if (playing) return;
  if (paused) {
    paused = false;
    clearInterval(timerId);
    timerId = null;
  }
  dispatch({ type });
}

function Control({ state, dispatch }) {
  if ( (state.countdownStateSeconds <= 0) && state.playing) {
    paused = false;
    clearInterval(timerId);
    timerId = null;
    dispatch({ type: 'play' });
  }
    
  return (
    <div className="control">
      <div className="control-row">
        <div className="inner-time">
          <div className="button center" onClick={() => btnDispatch({ dispatch, playing: state.playing, type: 'minusMinute' })}>
            <i className="fas fa-minus"></i>
          </div>
          <div className="center">
            <span className="title">Minutes</span>
          </div>
          <div className="button center" onClick={() => btnDispatch({ dispatch, playing: state.playing, type: 'addMinute' })}>
            <i className="fas fa-plus"></i> 
          </div>
        </div>
      </div>
      <div className="control-row">
        <div className="inner-time">
          <div className="button center" onClick={() => btnDispatch({ dispatch, playing: state.playing, type: 'minusSecond' })}>
            <i className="fas fa-minus"></i>
          </div>
          <div className="center">
            <span className="title">Seconds</span>
          </div>
          <div className="button center" onClick={() => btnDispatch({ dispatch, playing: state.playing, type: 'addSecond' })}>
            <i className="fas fa-plus"></i>      
          </div>
        </div>   
      </div>
      <div className="control-row">
        <div className="inner-play">
          <div className="button center margin-right" onClick={() => {
            if (state.countdownStateSeconds <= 0) return;
            if (timerId) {
              togglePause(dispatch);
            } else {
              startTimer(dispatch);
            }
          }}>
            <i className={`fas ${(state.playing) ? 'fa-pause' : 'fa-play'}`}></i>
          </div>
          <div className="button center" onClick={() => btnDispatch({ dispatch, playing: state.playing, type: 'reload' })}>
            <i className="fas fa-undo"></i>
          </div>
        </div>
      </div>
    </div>
  );

}

export default Control;
