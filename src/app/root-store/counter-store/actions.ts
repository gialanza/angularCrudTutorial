import {createAction, props} from '@ngrx/store';

export enum ActionTypes {
  INCREMENT = '[Counter] increment',
  DECREMENT = '[Counter] decrement',
  RESET = '[Counter] reset',
}
//NOTA nel nostro caso non abbiamo bisogno di passare valori nell'azione, togliere "props<{ valueA: string }>()"
export const Increment = createAction(ActionTypes.INCREMENT);
export const Decrement = createAction(ActionTypes.DECREMENT);
export const Reset = createAction(ActionTypes.RESET);