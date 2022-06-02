import {Action} from "@ngrx/store";
import {Asset} from "../../../features/crypto-monitoring/services/models/asset";

export const ADD_ASSETS = '[Assets] Add'

export class AddAssets implements Action {
  readonly type = ADD_ASSETS;

  constructor(public payload: Asset[]) {
  }

}

export type ALL = AddAssets
