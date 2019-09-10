import React from 'react';

function updateSeconds() {

}

function Control({ state, dispatch }) {
  
  return (
    <div className="control">
      <div className="control-row">
        <div className="inner-time">
          <div className="button center">
            <i className="fas fa-plus"></i>
          </div>
          <div className="center">
            <span className="title">Minutes</span>
          </div>
          <div className="button center">
            <i className="fas fa-minus"></i> 
          </div>
        </div>
      </div>
      <div className="control-row">
        <div className="inner-time">
          <div className="button center">
            <i className="fas fa-plus"></i>
          </div>
          <div className="center">
            <span className="title">Seconds</span>
          </div>
          <div className="button center">
            <i className="fas fa-minus"></i>      
          </div>
        </div>   
      </div>
      <div className="control-row">
        <div className="inner-play">
          <div className="button center margin-right">
            <i className="fas fa-play"></i>
          </div>
          <div className="button center">
            <i className="fas fa-undo"></i>
          </div>
        </div>
      </div>
    </div>
  );

}

export default Control;
