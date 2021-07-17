import {applyMiddleware, createStore} from 'redux';
import initialState from './initialState';
import reducer from './reducers/reducer';
import thunk from 'redux-thunk';


const store = createStore(reducer,initialState,applyMiddleware(thunk))


export default store;