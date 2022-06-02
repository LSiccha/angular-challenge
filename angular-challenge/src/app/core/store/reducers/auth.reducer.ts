import * as AuthActions from '../actions/auth.actions'
import { User } from "../../models/user.model";

export type Action = AuthActions.ALL;

const defaultState: User = {}


const newState = (state: User, newData: User) => {
  return Object.assign({}, state, newData)
}

export function authReducer(state: User = defaultState, action: Action){
  //console.log(action.type, state)

  switch (action.type) {
    case AuthActions.LOGIN:
      return newState(state, action.payload);

    default:
      return state;
  }
}

