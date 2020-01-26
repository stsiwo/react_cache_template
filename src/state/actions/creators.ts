import { ToggleLoginFormActionCreatorType, ActionTypeEnum, ToggleSignupFormActionCreatorType, ToggleNavBarActionCreatorType, ToggleFilterSortBarActionCreatorType, } from "./types";

/** ui **/                 
export const toggleLoginFormActionCreator: ToggleLoginFormActionCreatorType = (isLoginFormOpen) => ({
  type: ActionTypeEnum.TOGGLE_LOGIN_FORM, 
  isLoginFormOpen: isLoginFormOpen
})


export const toggleSignupFormActionCreator: ToggleSignupFormActionCreatorType = (isSignupFormOpen) => ({
  type: ActionTypeEnum.TOGGLE_SIGNUP_FORM, 
  isSignupFormOpen: isSignupFormOpen
})

export const toggleNavBarActionCreator: ToggleNavBarActionCreatorType = (isNavBarOpen) => ({
  type: ActionTypeEnum.TOGGLE_NAV_BAR,
  isNavBarOpen: isNavBarOpen
})

export const toggleFilterSortBarActionCreator: ToggleFilterSortBarActionCreatorType = (isFilterSortBarOpen) => ({
  type: ActionTypeEnum.TOGGLE_FILTER_SORT_BAR,
  isFilterSortBarOpen: isFilterSortBarOpen
})  
