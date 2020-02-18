import {combineReducers,createStore} from 'redux';
import Reducer from './Reducer';

const reducers = combineReducers({
	resources : Reducer,
	buldings : Reducer
})

const store = createStore(reducers)

export default store;
