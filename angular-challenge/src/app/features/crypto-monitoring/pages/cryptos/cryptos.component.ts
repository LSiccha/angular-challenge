import {Component, OnDestroy, OnInit} from '@angular/core';
import {CoinCapService} from "../../services/coin-cap.service";
import {Asset} from "../../models/asset";
import {User} from "../../../../core/models/user.model";
import {closestNode} from "@angular/core/schematics/utils/typescript/nodes";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-cryptos',
  templateUrl: './cryptos.component.html',
  styleUrls: ['./cryptos.component.css']
})
export class CryptosComponent implements OnInit, OnDestroy {


  data: Asset[] = []
  subscription!: Subscription

  constructor(
    private coinService: CoinCapService
  ) {
    this.getData()
  }

  ngOnInit(): void {


  }

  private getData(){
    this.subscription = this.coinService.getAssets().subscribe(
      res => {
        this.data = res.data;
        console.log(this.data)
      }
    )
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

}
