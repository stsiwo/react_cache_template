import { StateType } from "./types";

export const initialState: StateType = {
  ui: {
    isLoginFormOpen: false,
    isSignupFormOpen: false,
    isNavBarOpen: false,
    isFilterSortBarOpen: false,
  },
  test: 'initial',
  // for redux-persist
  _persist: {
    version: null,
    rehydrated: null
  }
}

