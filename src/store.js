import {createStore, applyMiddleware} from 'redux'
import ReduxThunk from 'redux-thunk';

import rootReducer from './reducers/rootReducer.js'

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default store
