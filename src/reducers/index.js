import {
  createStore,
  combineReducers,
  applyMiddleware,
} from 'redux';
import { createLogger } from 'redux-logger';
import profile from './profile';


const loggerMiddleware = createLogger();
// const createStoreWithMiddleware = applyMiddleware(loggerMiddleware)(createStore);

const reducers = combineReducers({
  profile,
});

// const configureStore = initialState => createStoreWithMiddleware(reducer, initialState);
// const configureStore = createStoreWithMiddleware(reducers);
const configureStore = createStore(
  reducers,
  applyMiddleware(loggerMiddleware),
);
export default configureStore;
