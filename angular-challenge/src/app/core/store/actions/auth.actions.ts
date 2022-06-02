import {Action} from "@ngrx/store";
import {User} from "../../models/user.model";

export const LOGIN = '[Auth] Login';

export class Login implements Action {
  readonly type = LOGIN;

  constructor(public payload: User) {
  }
}

export type ALL = Login

