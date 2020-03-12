import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import MainApplication from 'pages';
import reduxStore from './appState/store';
import './index.scss';
import * as serviceWorker from './serviceWorker';

const Application = () => (
  <Provider store={reduxStore}>
    <React.Fragment>
      <CssBaseline />
      <MainApplication />
    </React.Fragment>
  </Provider> 
);

ReactDOM.render(<Application />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
