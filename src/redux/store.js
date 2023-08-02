import { createStore } from 'redux';
import chatReducer from './reducers';

const store = createStore(chatReducer);

export default store;
