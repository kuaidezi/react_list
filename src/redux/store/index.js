import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
//导入已经创建的reducer
import reducer from '../reducers'
export default createStore(reducer, applyMiddleware(thunk))