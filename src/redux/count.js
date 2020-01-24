export function setCount(newCount) {
    return {
        type: "SET_COUNT",
        payload: newCount
    }
}

export function addCount(value) {
    return {
        type: "ADD_COUNT",
        payload: value
    }
}

export default function countReducer(count = 0, action) {
    switch(action.type) {
        case "SET_COUNT": {
            return action.payload;
        }
        case "ADD_COUNT": {
            return count + action.payload;
        }
        default: {
            return count;
        }
    }
}