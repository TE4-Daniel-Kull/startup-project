export function becomeHappy() {
    return {
        type: "BECOME_HAPPY",
    }
}

export function becomeUnhappy() {
    return {
        type: "BECOME_UNHAPPY",
    }
}

export function changeThoughts(newThought) {
    return {
        type: "CHANGE_THOUGHTS",
        payload: newThought
    }
}

const initialState = {
    happy: true,
    thoughts: "Today is a good day!"
}

export default function moodReducer(mood = initialState, action) {
    switch(action.type) {
        case "BECOME_HAPPY": {
            return {
                ...mood,
                happy: true
            }
        }
        case "BECOME_UNHAPPY": {
            return {
                ...mood,
                happy: false
            }
        }
        case "CHANGE_THOUGHTS": {
            return {
                ...mood,
                thoughts: action.payload
            }
        }
        default: {
            return mood;
        }
    }
}