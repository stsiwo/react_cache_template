import { createStore, applyMiddleware, compose } from 'redux';
import { rootReducer } from './reducers/rootReducer';
import { initialState } from './state';
import { StateType } from './types';
import thunk from 'redux-thunk';
import { persistReducer, persistStore } from 'redux-persist'
/**
 * es not lib (docs)
 * reference: https://github.com/rt2zz/redux-persist/issues/409
 **/
import storage from 'redux-persist/es/storage'
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2';

/**
 * redux-persist config
 **/
const persistConfig = {
  key: 'root',
  storage,
  //stateReconciler: autoMergeLevel2 // see "Merge Process" section for details.
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const middleware: any[] = [thunk]

const composeEnhancers = (<any>window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(persistedReducer, initialState as StateType, composeEnhancers( 
    applyMiddleware(...middleware)  
));

export const persistor = persistStore(store)
