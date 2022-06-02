
import * as UsersActions from '../actions/users.actions'
import {User} from "../../models/user.model";

export type Action = UsersActions.ALL;

const defaultState: User[] = []


const newState = (state: User[], newData: User[]) => {
  return Object.assign([], state, newData)
}

export function userReducer(state: User[] = defaultState, action: Action){
  console.log(action.type, state)

  switch (action.type) {
    case UsersActions.ADD_USER:
      let newData: User[] = []
      state.forEach(val => {newData.push(Object.assign(val))})
      newData.push(action.payload)
      //return newState(state, [action.payload]);
      return newState(state, newData);

    default:
      return state;
  }
}
