const initialBody = ""

const ADD_BODY = 'ADD_BODY'

export const addBody = (body) => {
    return {
        type: ADD_BODY,
        payload: body
    }
}

const bodyReducer = (state = initialBody, action) => {
    switch (action.type) {
        case ADD_BODY:
            return action.payload
        default:
            return state
    }
}

export default bodyReducer