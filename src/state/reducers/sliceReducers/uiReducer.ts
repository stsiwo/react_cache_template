import { createReducer } from "./createReducer";
import { StateType, UiStateType } from '../../types';
import { initialState } from "../..//state";
import { uiHandler } from "../handlers/uiHandler"; 

export const uiReducer = createReducer<UiStateType>(initialState.ui, uiHandler);

