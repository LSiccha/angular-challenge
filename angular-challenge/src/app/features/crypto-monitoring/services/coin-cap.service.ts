import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {Observable} from "rxjs";
import {Asset} from "../models/asset";

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

  getCandles(exchange: string,
             interval: string,
             baseId: string,
             quoteId: string,
             start: number,
             end: number
  )
  {
    let params = new HttpParams()
      .set('exchange', exchange)
      .set('interval', interval)
      .set('baseId', baseId)
      .set('quoteId', quoteId)
      .set('start', start)
      .set('end', end)

    return this.http.get(
      `${this.base_url}/candles`,
      {
        params : params
      }
    )

  }


}
