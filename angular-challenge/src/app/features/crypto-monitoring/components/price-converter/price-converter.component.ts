import {Component, Input, OnInit} from '@angular/core';
import {Asset} from "../../services/models/asset";

@Component({
  selector: 'app-price-converter',
  templateUrl: './price-converter.component.html',
  styleUrls: ['./price-converter.component.css']
})
export class PriceConverterComponent implements OnInit {

  private _asset!: Asset
  @Input('asset')
  set asset(data: Asset){
    this._asset = data;
    this.getUsd()
    }
  get asset(){
    return this._asset
  }

  assetInput: number = 0
  usdInput: number = 0

  constructor() { }

  ngOnInit(): void {
  }

  getAsset(){
    this.assetInput = this.usdInput/Number(this.asset.priceUsd)
    this.assetInput = Number(this.assetInput.toFixed(4))
  }

  getUsd(){
    this.usdInput = this.assetInput*Number(this.asset.priceUsd)
    this.usdInput = Number(this.usdInput.toFixed(4))
  }

}
