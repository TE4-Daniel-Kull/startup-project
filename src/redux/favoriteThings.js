
export function addFavoriteThing(item) {
    return {
        type: "ADD_FAVORITE_THING",
        payload: item
    }
}

export function removeFavoriteThing(item) {
    return {
        type: "REMOVE_FAVORITE_THING",
        payload: item
    }
}

const initialState = [];
export default function favoriteThingsReducer(favoriteThings = initialState, action) {
    switch(action.type) {
        case "ADD_FAVORITE_THING": {
            return [...favoriteThings, action.payload];
        }
        case "REMOVE_FAVORITE_THING": {
            return favoriteThings.filter(thing => thing !== action.payload);
        }
        default: {
            return favoriteThings;
        }
    }
}