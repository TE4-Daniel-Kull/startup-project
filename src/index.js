import React from 'react';
import ReactDOM from 'react-dom';

import store from './redux/store';

import App from './App'

store.subscribe(() => {
    console.log(store.getState());
});

ReactDOM.render(<App />, document.getElementById("root"));