import { Component, OnInit } from '@angular/core';
import {CoinCapService} from "../../services/coin-cap.service";
import {Asset} from "../../models/asset";

@Component({
  selector: 'app-cryptos',
  templateUrl: './cryptos.component.html',
  styleUrls: ['./cryptos.component.css']
})
export class CryptosComponent implements OnInit {

  data: Asset[] = []

  constructor(
    private coinService: CoinCapService
  ) {
    this.getData()
  }

  ngOnInit(): void {
  }

  private getData(){
    this.coinService.getAssets().subscribe(
      res => {
        this.data = res.data;
        console.log(this.data)
      }
    )
  }

}
