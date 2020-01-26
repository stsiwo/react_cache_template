import { createReducer } from "./createReducer";
import { StateType, UiStateType } from '../../types';
import { initialState } from "../..//state";
import { uiHandler } from "../handlers/uiHandler"; 
import { testHandler } from '../handlers/testHandler';

export const testReducer = createReducer<string>(initialState.test, testHandler);

