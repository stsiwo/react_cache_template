import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StateType } from './state/types';
import testThunk from './state/thunk/testThunk';


const Child: React.FunctionComponent<{}> = (props) => {
  const isLoginFormOpen = useSelector((state: StateType) => state.ui.isLoginFormOpen)
  console.log("*** login form open ***")
  console.log(isLoginFormOpen)
  const dispatch = useDispatch()

  const handleToggleLoginFormClickHandler: React.EventHandler<React.MouseEvent<HTMLElement>> = (e) => {
    dispatch(testThunk())
  }
  return (
    <>
      <h1>current login form open: {isLoginFormOpen.toString()}</h1>
      <button type='button' onClick={handleToggleLoginFormClickHandler} >Toggle Login Form </button>
    </>
  );
}

export default Child
