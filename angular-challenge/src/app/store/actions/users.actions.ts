import {Action} from "@ngrx/store";
import {UserStore} from "../models/user-store.model";

export const ADD_USER = '[Users] Add';

export class AddUser implements Action {
  readonly type = ADD_USER;

  constructor(public payload: UserStore) {
  }
}

export type ALL = AddUser

