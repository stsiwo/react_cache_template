import { HandlerType } from "./types"; 
import { UiStateType } from "../../types";
import { toggleLoginFormCaseReducer, toggleSignupFormCaseReducer, toggleNavBarCaseReducer, toggleFilterSortBarCaseReducer } from "../caseReducers/uiCaseReducers";
import { ActionTypeEnum } from "../../actions/types";
import { setTestTextCaseReducer } from '../caseReducers/testCaseReducer'

export const testHandler: HandlerType<string> = {
    [ActionTypeEnum.SET_TEST_TEXT]: setTestTextCaseReducer, 
  }


