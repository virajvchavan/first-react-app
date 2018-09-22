import {createStore, applyMiddleWare} from 'redux'
import rootReducer from './reducers/rootReducer.js'

const store = createStore(rootReducer);

export default store
