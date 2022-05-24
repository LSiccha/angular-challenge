import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {Observable} from "rxjs";

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

  public getAssets(): Observable<any>{
    return this.http.get<any>(`${this.base_url}/assets`)
  }

  public get(id: string): Observable<any>{
    return this.http.get<any>(`${this.base_url}/assets/${id}`)
  }

  getCandles(params: CandleParams
  )
  {
    let p = new HttpParams()
      .set('exchange', params.exchange)
      .set('interval', params.interval)
      .set('baseId', params.baseId)
      .set('quoteId', params.quoteId)
      .set('start', params.start)
      .set('end', params.end)

    return this.http.get(
      `${this.base_url}/candles`,
      {
        params : p
      }
    )

  }


}
