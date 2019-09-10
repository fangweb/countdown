import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'sanitize.css/sanitize.css';
import 'react-circular-progressbar/dist/styles.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Styles.css';
import Countdown from './Countdown';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Countdown />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
