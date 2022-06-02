
import { userReducer } from "./reducers/users.reducer";
import { ActionReducerMap } from "@ngrx/store";
import {User} from "../models/user.model";
import { authReducer} from "./reducers/auth.reducer";
import {Asset} from "../../features/crypto-monitoring/services/models/asset";
import {assetsReducer} from "./reducers/assets.reducer";

export const rootReducer = {}

export interface AppState {
  users: User[],
  currentUser: User,
  assets: Asset[]
}

export const reducers: ActionReducerMap<AppState, any> = {
  users: userReducer,
  currentUser: authReducer,
  assets: assetsReducer
}
