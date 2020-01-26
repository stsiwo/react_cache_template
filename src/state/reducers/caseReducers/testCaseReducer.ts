import { CaseReducerType } from "./types";
import { SetTestTextActionType } from "../../actions/types";
import { StateType } from "../../types";

export const setTestTextCaseReducer: CaseReducerType<string, SetTestTextActionType> = (test = 'initial', action) => {
  console.log("*** inside setTestText case Reducer ***")
  console.log(test)
  console.log(action)
  return action.test;               
};

