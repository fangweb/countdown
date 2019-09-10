import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

function Reader({ state }) {
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
          value={3} maxValue={100} text={`1:36`} />
        </div>
    </div>
  );

}

export default Reader;
