import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

function Reader({ state }) {
  const minutes = Math.floor(state.countdownStateSeconds / 60);
  let seconds = state.countdownStateSeconds % 60;
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  const display = `${minutes}:${seconds}`;
  const progress = 100 - Math.floor((state.countdownStateSeconds / state.startStateSeconds) * 100);

  return (
    <div className="reader">
      <div className="reader-inner">
        <CircularProgressbar 
          strokeWidth={1}
          styles={buildStyles({
            strokeLinecap: 'butt',
            pathColor: 'rgb(212, 252, 223)',
            textColor: 'rgb(212, 252, 223)',
            trailColor: 'rgb(34, 135, 128)'
          })}
          value={progress} maxValue={100} text={display} />
        </div>
    </div>
  );

}

export default Reader;
