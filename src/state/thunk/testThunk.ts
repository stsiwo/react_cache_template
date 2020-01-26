import { ThunkAction } from "redux-thunk";
import { AnyAction } from "redux";
import { StateType } from "../types";
import { toggleLoginFormActionCreator } from "../actions/creators";

export type TestThunkType = () => ThunkAction<void, StateType, undefined, AnyAction>;

const testThunk: TestThunkType = () => async ( dispatch, getState ) => {
  console.log("*** running testThunk ***")
  const { ui } = getState()
  dispatch(toggleLoginFormActionCreator(!ui.isLoginFormOpen))
}
export default testThunk;

