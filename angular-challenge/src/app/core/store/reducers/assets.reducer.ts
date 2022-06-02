import * as AssetsActions from '../actions/assets.actions'
import {Asset} from "../../../features/crypto-monitoring/services/models/asset";

export type Action = AssetsActions.ALL;

const defaultState: Asset[] = [
  {
    "id": "bitcoin",
    "rank": "1",
    "symbol": "BTC",
    "name": "Bitcoin",
    "supply": "19055418.0000000000000000",
    "maxSupply": "21000000.0000000000000000",
    "marketCapUsd": "574339099587.9821947682068710",
    "volumeUsd24Hr": "13887773623.8420832188971054",
    "priceUsd": "30140.4618669599478095",
    "changePercent24Hr": "-5.7847869072212175",
    "vwap24Hr": "31438.8510496734960976",
  }
]

const newState = (state: Asset[], newData: Asset[]) => {
  return Object.assign([], state, newData)
}

export function assetsReducer(state: Asset[] = defaultState, action: Action){
  console.log(action.type, state)

  switch (action.type){
    case AssetsActions.ADD_ASSETS:{
      let newData : Asset[] = [];
      action.payload.forEach(asset => {newData.push(Object.assign(asset))});
      return newState(state, newData);
    }
    default:
      return state;
  }
}
