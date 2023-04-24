import { createStore } from "redux";
import { combineReducers } from "redux";
import titleReducer from "../modules/titleReducer";
import bodyReducer from "../modules/bodyReducer";
import todoReducer from "../modules/todoReducer";

const rootReducer = combineReducers({
    todoTitle: titleReducer,
    todoBody: bodyReducer,
    todoList: todoReducer
}); 
const store = createStore(rootReducer); 

export default store; 