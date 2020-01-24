import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import store from './redux/store';
import {addFavoriteThing, removeFavoriteThing} from './redux/favoriteThings';
import {becomeHappy, becomeUnhappy} from './redux/mood';
import {setCount} from './redux/count';

import App from './App';

store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(setCount(23));
store.dispatch(setCount(55));
store.dispatch(becomeUnhappy());
store.dispatch(becomeHappy());
store.dispatch(addFavoriteThing("Mom's spagetti"));
store.dispatch(addFavoriteThing("Mom's meatballs"));
store.dispatch(addFavoriteThing("games"));
store.dispatch(removeFavoriteThing("Mom's meatballs"))

ReactDOM.render(
(<Provider store={store}>
    <App />
</Provider>), document.getElementById("root"));