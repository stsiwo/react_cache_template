import { Action } from 'redux'
import { CaseReducerType } from '../caseReducers/types';
import { ActionTypeEnum } from '../../actions/types';

export type HandlerType<T> = {
  [P in ActionTypeEnum]?: CaseReducerType<T>;
  }

