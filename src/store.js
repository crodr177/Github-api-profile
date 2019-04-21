import { createStore } from 'redux'
import repoReducer from './reducers/repoReducer'

const store = createStore(repoReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store