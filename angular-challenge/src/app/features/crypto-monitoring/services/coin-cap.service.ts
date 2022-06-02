import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {Asset} from "./models/asset";
import {Candle} from "./models/candle.model";
import {Response} from "./models/response.model";

interface CandleParams  {
  exchange: string ,
  interval: string,
  baseId: string,
  quoteId: string,
  start: number,
  end: number
}

@Injectable({
  providedIn: 'root'
})
export class CoinCapService {

  base_url = environment.coinUrl

  constructor(
    private http: HttpClient
  ) { }

  public getAssets(): Observable<Asset[]>{
    return this.http.get<Response>(`${this.base_url}/assets`)
      .pipe(map(data => data.data))
  }

  public get(id: string): Observable<Asset>{
    return this.http.get<Response>(`${this.base_url}/assets/${id}`)
      .pipe(map( data => data.data))
  }

  public getCandles(params: CandleParams
  ) : Observable<Candle[]>
  {
    let p = new HttpParams()
      .set('exchange', params.exchange)
      .set('interval', params.interval)
      .set('baseId', params.baseId)
      .set('quoteId', params.quoteId)
      .set('start', params.start)
      .set('end', params.end)

    return this.http.get<Response>(
      `${this.base_url}/candles`,
      {
        params : p
      }
    )
      .pipe(map(data => data.data));

  }


}
