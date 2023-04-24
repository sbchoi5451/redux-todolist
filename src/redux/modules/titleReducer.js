const initialTitle = ""

const ADD_TITLE = 'ADD_TITLE'

export const addTitle = (title) => {
    return {
        type: ADD_TITLE,
        payload: title
    }
}

const titleReducer = (state = initialTitle, action) => {
    switch (action.type) {
        case ADD_TITLE:
            return action.payload
        default:
            return state
    }
}

export default titleReducer