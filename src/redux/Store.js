import { createStore,applyMiddleware} from 'redux'
import { combineReducers } from 'redux'
import dataReducer from './dataFetch/DataReducer'
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'
const rootReducer=combineReducers({
    tiersdata:dataReducer
})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunkMiddleware)));

export default store;
