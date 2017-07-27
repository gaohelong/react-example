import {createStore, combineReducers, applyMiddleware} from 'redux';
import * as reducer from '../Reducers/index';
import thunk from 'redux-thunk';

// 创建一个Redux store来以存放应用中所有的state，应用中应有且仅有一个store。
var store = createStore(
    combineReducers(reducer),
    applyMiddleware(thunk)
);

export default store;
