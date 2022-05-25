
import { UserStore } from "./models/user-store.model";
import { userReducer } from "./reducers/users.reducer";
import { ActionReducerMap } from "@ngrx/store";
import {User} from "../core/models/user.model";
import { authReducer} from "./reducers/auth.reducer";

export const rootReducer = {}

export interface AppState {
  users: UserStore[],
  currentUser: User
}

export const reducers: ActionReducerMap<AppState, any> = {
  users: userReducer,
  currentUser: authReducer
}
