const initialState = {
    todos: []
};

const ADD_TODO = 'ADD_TODO'
const DELETE_TODO = 'DELETE_TODO'
const DONE_TODO = 'DONE_TODO'
const CANCEL_TODO = 'CANCEL_TODO'

export const addTodo = ({ id, title, body, isDone }) => {
    return {
        type: ADD_TODO,
        payload: {
            id,
            title,
            body,
            isDone
        }
    }
}

export const deleteTodo = (id) => {
    return {
        type: DELETE_TODO,
        payload: id
    }
}

export const doneTodo = (id) => {
    return {
        type: DONE_TODO,
        payload: id
    }
}

export const cancelTodo = (id) => {
    return {
        type: CANCEL_TODO,
        payload: id
    }
}

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }

        case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter((todo) => todo.id !== action.payload)
            }

        case DONE_TODO:
            return {
                ...state,
                todos: state.todos.map((todo) =>
                    todo.id === action.payload ? { ...todo, isDone: true } : todo
                )
            }

        case CANCEL_TODO:
            return {
                ...state,
                todos: state.todos.map((todo) =>
                    todo.id === action.payload ? { ...todo, isDone: false } : todo
                )
            }

        default:
            return state
    }
}

export default todoReducer