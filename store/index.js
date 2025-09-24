import { createStore, compose, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';

import storage from './ssrStorage';            // <-- use SSR-safe storage
import rootReducer from './reducers/rootReducers';

const middleware = [thunk];

const persistConfig = { key: 'root', storage };
const persistedReducer = persistReducer(persistConfig, rootReducer);

// safe devtools compose (works on server too)
const composeEnhancers =
  (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(...middleware))
);

// only create persistor in the browser
const persistor = typeof window !== 'undefined' ? persistStore(store) : null;

export { store, persistor };
