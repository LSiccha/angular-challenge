import {Component, OnDestroy, OnInit} from '@angular/core';
import {CoinCapService} from "../../services/coin-cap.service";
import {Asset} from "../../services/models/asset";
import {Subscription} from "rxjs";
import {AppState} from "../../../../core/store";
import {Colors} from "../../../../core/enums/colors.enum";
import {Store} from "@ngrx/store";
import * as AssetsActions from '../../../../core/store/actions/assets.actions'

@Component({
  selector: 'app-cryptos',
  templateUrl: './cryptos.component.html',
  styleUrls: ['./cryptos.component.css']
})
export class CryptosComponent implements OnInit, OnDestroy {

  cardsVisible: boolean = true;

  red: Colors = Colors.Red
  green: Colors = Colors.Green

  data: Asset[] = []
  highlights!: {biggestWinners: Asset[], biggestLosers: Asset[]}
  subscription!: Subscription

  constructor(
    private coinService: CoinCapService,
    private store: Store<AppState>
  ) {
    this.getData()
  }

  ngOnInit(): void {

  }

  private getData(){
    this.subscription = this.coinService.getAssets().subscribe(
      res => {
        this.data = res;
        this.getHighlights()
        this.store.dispatch(new AssetsActions.AddAssets(this.data))
        console.log(this.data)
      }
    )
  }

  private getHighlights(){
    let dataCopy = Object.assign([], this.data)
    let sortedByPriceChange = dataCopy.sort(
      (a:Asset, a2: Asset) => {
        return Number(a.changePercent24Hr) - Number(a2.changePercent24Hr)
      }
    )
    let losers: Asset[] = sortedByPriceChange.slice(0, 3)
    let winners: Asset[] = sortedByPriceChange.slice(97, ).reverse()
    console.log(sortedByPriceChange)
    this.highlights = {
      biggestLosers: losers,
      biggestWinners: winners
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }



}
