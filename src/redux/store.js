import favoriteThingsReducer from './favoriteThings';
import moodReducer from './mood';
import countReducer from './count';
const Redux = require('redux');

const rootReducer = Redux.combineReducers({
    favoriteThings: favoriteThingsReducer,
    mood: moodReducer,
    count: countReducer
});

const store = Redux.createStore(rootReducer);
export default store;