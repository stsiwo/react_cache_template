import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StateType } from './state/types';
import testThunk from './state/thunk/testThunk';
import { setTestTextActionCreator, toggleLoginFormActionCreator } from './state/actions/creators';


const Child: React.FunctionComponent<{}> = (props) => {
  const isLoginFormOpen = useSelector((state: StateType) => state.ui.isLoginFormOpen)
  const test = useSelector((state: StateType) => state.test)
  console.log("*** login form open ***")
  console.log(isLoginFormOpen)
  const dispatch = useDispatch()

  const handleToggleLoginFormClickHandler: React.EventHandler<React.MouseEvent<HTMLElement>> = (e) => {
    dispatch(testThunk())
    //dispatch(toggleLoginFormActionCreator(!isLoginFormOpen))
  }

  const handleTestInputChangeHandler: React.EventHandler<React.ChangeEvent<HTMLInputElement>> = (e) => {
    dispatch(setTestTextActionCreator(e.currentTarget.value))
  }
  return (
    <>
      <h1>current login form open: {isLoginFormOpen.toString()}</h1>
      <button type='button' onClick={handleToggleLoginFormClickHandler} >Toggle Login Form </button>
      <input type='text' value={test} onChange={handleTestInputChangeHandler}/>
    </>
  );
}

export default Child
