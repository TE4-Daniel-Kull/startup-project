import Redux from 'redux';
import favoriteThingsReducer from './redux/favoriteThings';
import moodReducer from './redux/mood';
import countReducer from './redux/count';

const rootReducer = Redux.combineReducers({
    favoriteThings: favoriteThingsReducer,
    mood: moodReducer,
    count: countReducer
});

const store = Redux.createStore(rootReducer);
export default store;