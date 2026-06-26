import { createStore } from 'redux';
import { loadState, saveState } from './localStorage';
import rootReducer from './reducers';

const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__();

const preloadedState = loadState();
const store = createStore(rootReducer, preloadedState, devTools);

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
