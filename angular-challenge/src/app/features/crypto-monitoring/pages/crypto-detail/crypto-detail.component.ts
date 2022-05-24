import {Component, OnDestroy, OnInit} from '@angular/core';
import {Candle} from "../../models/candle.model";
import {CoinCapService} from "../../services/coin-cap.service";
import {ActivatedRoute} from "@angular/router";
import {Asset} from "../../models/asset";
import {Subscription, timer} from "rxjs";
import {switchMap} from "rxjs/operators";

@Component({
  selector: 'app-crypto-detail',
  templateUrl: './crypto-detail.component.html',
  styleUrls: ['./crypto-detail.component.css']
})
export class CryptoDetailComponent implements OnInit, OnDestroy {


  id: string = ''
  candleParams = {
    exchange: 'binance',
    interval: 'm1',
    baseId: '',
    quoteId: 'usd-coin',
    start: Date.now() - 10500000,
    end: Date.now()
  }

  asset!: Asset;
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
    this.getAsset(this.id)
    this.getPrices()
    this.getCandles()
  }

  private getAsset(id: string){
    this.coinService.get(id).subscribe(
      data => {
        this.asset = data.data
        console.log(this.asset)
      }
    )
  }

  private getPrices(){
    this.assetSubscription = timer(0, 1000).
    pipe(
      switchMap(() => {
        return this.coinService.get(this.id)
      })
    )
      .subscribe(
        data => {
          this.asset = data.data
          console.log(this.asset)
        }
      )
  }

  private getCandles(){
    this.candleSubscription = timer(0, 1000).
    pipe(
      switchMap(() => {
        return this.coinService.getCandles(this.candleParams)
      })
    )
      .subscribe(
        (data: any) => {
          this.candles = data.data;
          this.formatCandles();
          console.log(this.candles)
        }
      )
  }

  private formatCandles(){
    for (let candle of this.candles){
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
  }

  greaterThan(value: string | number, compare: number){
    return Number(value)>compare
  }

  getPriceChangePercent(){
    return Number(this.asset.changePercent24Hr)
  }

  getPriceChange(){
    return (Number(this.asset.changePercent24Hr)*Number(this.asset.priceUsd))/100
  }


  ngOnDestroy(): void {
    this.assetSubscription.unsubscribe();
    this.candleSubscription.unsubscribe();
  }



}
