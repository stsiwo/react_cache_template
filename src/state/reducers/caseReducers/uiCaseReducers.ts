import { CaseReducerType } from "./types";
import { UiStateType } from "../..//types";
import { ToggleLoginFormActionType, ToggleSignupFormActionType, ToggleNavBarActionType, ToggleFilterSortBarActionType } from "../../actions/types";
import cloneDeep from 'lodash/cloneDeep'

/**
 * redux-persist caveats
 *  - if case reducer returns old state object and override its one of property (e.g., ui.isSignupFormOpen = action.isSignupFormOpen)
 *    it does not update persisted value
 *  - SOLUTION: create new object and copy its content (e.g., use cloneDeep in lodash)
 *  - reference: https://github.com/rt2zz/redux-persist/issues/623
 **/

export const toggleLoginFormCaseReducer: CaseReducerType<UiStateType, ToggleLoginFormActionType> = (ui, action) => {
  const newUi = cloneDeep(ui)
  newUi.isLoginFormOpen = action.isLoginFormOpen
  return newUi;               
};

export const toggleSignupFormCaseReducer: CaseReducerType<UiStateType, ToggleSignupFormActionType> = (ui, action) => {
  ui.isSignupFormOpen = action.isSignupFormOpen
  return ui;               
};                         

export const toggleNavBarCaseReducer: CaseReducerType<UiStateType, ToggleNavBarActionType> = (ui, action) => {
  ui.isNavBarOpen = action.isNavBarOpen
  return ui;               
};

export const toggleFilterSortBarCaseReducer: CaseReducerType<UiStateType, ToggleFilterSortBarActionType> = (ui, action) => {
  ui.isFilterSortBarOpen = action.isFilterSortBarOpen
  return ui;
};    

