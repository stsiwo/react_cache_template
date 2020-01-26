import { PersistedState } from "redux-persist";

export declare type UiStateType = {
  isLoginFormOpen: boolean;
  isSignupFormOpen: boolean;
  isNavBarOpen: boolean;   
  isFilterSortBarOpen: boolean;
}

export declare type DomainStateType = {
}


export declare type StateType = {
  ui: UiStateType          
  test: string
  //domain: DomainStateType
} & PersistedState

