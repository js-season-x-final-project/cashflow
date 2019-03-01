import { createStore } from 'redux';
import userReducer from './reducers/usersReducer'

const store = createStore(userReducer);

export default store;
