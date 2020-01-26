import { combineReducers, createStore } from 'redux'
import { uiReducer } from './sliceReducers/uiReducer';
import { setTestTextCaseReducer } from './caseReducers/testCaseReducer';
import { testReducer } from './sliceReducers/testReducer';

export const rootReducer = combineReducers({ 
  ui: uiReducer,
  test: testReducer,
})

