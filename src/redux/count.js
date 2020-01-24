export function setCount(newCount) {
    return {
        type: "SET_COUNT",
        payload: newCount
    }
}

export function increment(value = 1) {
    return {
        type: "INCREMENT",
        payload: value
    }
}

export function decrement(value = 1) {
    return {
        type: "DECREMENT",
        payload: value
    }
}

export default function countReducer(count = 0, action) {
    switch(action.type) {
        case "SET_COUNT": {
            return action.payload;
        }
        case "INCREMENT": {
            return count + action.payload;
        }
        case "DECREMENT": {
            return count - action.payload;
        }
        default: {
            return count;
        }
    }
}