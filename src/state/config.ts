import { createStore, applyMiddleware, compose } from 'redux';
import { rootReducer } from './reducers/rootReducer';
import { initialState } from './state';
import { StateType } from './types';
import thunk from 'redux-thunk';

const middleware: any[] = [thunk]


const composeEnhancers = (<any>window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducer, initialState as StateType, composeEnhancers( 
    applyMiddleware(...middleware)  
));

