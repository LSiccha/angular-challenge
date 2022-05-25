
import * as UsersActions from '../actions/users.actions'
import { User } from "../../core/models/user.model";
import {UserStore} from "../models/user-store.model";

export type Action = UsersActions.ALL;

const defaultState: UserStore[] = []


const newState = (state: UserStore[], newData: UserStore[]) => {
  return Object.assign([], state, newData)
}

export function userReducer(state: UserStore[] = defaultState, action: Action){
  console.log(action.type, state)

  switch (action.type) {
    case UsersActions.ADD_USER:
      let newData: UserStore[] = []
      state.forEach(val => {newData.push(Object.assign(val))})
      newData.push(action.payload)
      //return newState(state, [action.payload]);
      return newState(state, newData);

    default:
      return state;
  }
  return state
}
