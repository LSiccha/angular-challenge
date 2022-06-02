import { Component, OnDestroy, OnInit} from '@angular/core';
import {Candle} from "../../services/models/candle.model";
import {CoinCapService} from "../../services/coin-cap.service";
import {ActivatedRoute} from "@angular/router";
import {Asset} from "../../services/models/asset";
import {of, Subscription, timer} from "rxjs";
import {catchError, filter, map, switchMap} from "rxjs/operators";
import {ToSubmit} from "../../components/graph-controls/graph-controls.component";


export interface AssetWithPriceChange extends Asset {
  priceChange?: number
}

@Component({
  selector: 'app-crypto-detail',
  templateUrl: './crypto-detail.component.html',
  styleUrls: ['./crypto-detail.component.css'],
})
export class CryptoDetailComponent implements OnInit, OnDestroy {


  id: string = ''
  selectedDate: boolean = false;
  candleParams = {
    exchange: 'binance',
    interval: 'm1',
    baseId: '',
    quoteId: 'usd-coin',
    start: Date.now() - 60000*60,
    end: Date.now()
  }


  asset!: AssetWithPriceChange;
  candles!: Candle[]

  candleSubscription!: Subscription;
  assetSubscription!: Subscription;

  constructor(
    private coinService: CoinCapService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.candleParams.baseId = this.id
    this.getAsset()
    this.getPrices()
    this.getCandles()
  }

  private getAsset(){
    this.coinService.get(this.id).subscribe(
      data => {
        this.asset = data
        this.asset.priceChange = this.getPriceChange()
        console.log(this.asset)
      }
    )
  }

  private getPrices(){
    this.assetSubscription = timer(0, 1000).
    pipe(
      switchMap(() => this.coinService.get(this.id)
      )
    )
      .subscribe(
        data => {
          this.asset = data
          this.asset.priceChange = this.getPriceChange()
        }
         // console.log(this.asset)
      )
  }

  private getCandles(){
    this.candleSubscription = timer(0, 1000).
    pipe(
      switchMap(() => {
        if (!this.selectedDate){
          this.refreshEndParam();
        }
        return this.coinService.getCandles(this.candleParams)
          .pipe(
            map((candles : Candle[]) => candles.map(candle => {
              this.formatCandle(candle)
              return candle;
            })),
            catchError( err => {return of(undefined)})
          )
      }),
      filter((data) => {return data !== undefined}),
    )
      .subscribe(
        (data: any) => {
          console.log(data)
          this.candles = data;
          //this.formatCandles();
          //console.log(this.candles)
        }
      )
  }

  private formatCandle(candle: Candle){
      Object.keys(candle).forEach(
        key => {
          if (key === 'period'){
            candle[key] = new Date(candle[key]).toISOString()
          }
          else{
            candle[key as keyof Candle] = Number(candle[key as keyof Candle])
          }
        }
      )
  }

  private getPriceChange(){
    return (Number(this.asset.changePercent24Hr)*Number(this.asset.priceUsd))/100
  }

  updateParams(newParams: ToSubmit){
    if (newParams.start){
      this.candleParams.start = newParams.start
    }
    if (newParams.end){
      this.selectedDate = true;
      this.candleParams.end = newParams.end
    }
    if (newParams.interval){
      this.candleParams.interval = newParams.interval
    }
  }

  resetToRealTime(){
    this.selectedDate = false;
    this.candleParams.start = Date.now() - 60000*180
  }


  /**
   * Call before candle request
   */
  private refreshEndParam(){
    this.candleParams.end = Date.now()
  }

  ngOnDestroy(): void {
    this.assetSubscription.unsubscribe();
    this.candleSubscription.unsubscribe();
  }




}
