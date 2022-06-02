import {Component, Input, OnInit} from '@angular/core';
import {Asset} from "../../services/models/asset";

@Component({
  selector: 'app-highlight-card',
  templateUrl: './highlight-card.component.html',
  styleUrls: ['./highlight-card.component.css']
})
export class HighlightCardComponent implements OnInit {

  @Input() icon!: string
  @Input() color: string = ''
  @Input() title: string = 'Probando'
  @Input() data: Asset[] = [
    {
      "id": "bitcoin",
      "rank": "1",
      "symbol": "BTC",
      "name": "Bitcoin",
      "supply": "19055125.0000000000000000",
      "maxSupply": "21000000.0000000000000000",
      "marketCapUsd": "600913392948.3738693718152750",
      "volumeUsd24Hr": "12416338708.1862424369243710",
      "priceUsd": "31535.5261615116074742",
      "changePercent24Hr": "0.1116606177966628",
      "vwap24Hr": "31718.0439558917366477",
    },
    {
      "id": "bitcoin",
      "rank": "1",
      "symbol": "BTC",
      "name": "Bitcoin",
      "supply": "19055125.0000000000000000",
      "maxSupply": "21000000.0000000000000000",
      "marketCapUsd": "600913392948.3738693718152750",
      "volumeUsd24Hr": "12416338708.1862424369243710",
      "priceUsd": "31535.5261615116074742",
      "changePercent24Hr": "0.1116606177966628",
      "vwap24Hr": "31718.0439558917366477",
    },
    {
      "id": "bitcoin",
      "rank": "1",
      "symbol": "BTC",
      "name": "Bitcoin",
      "supply": "19055125.0000000000000000",
      "maxSupply": "21000000.0000000000000000",
      "marketCapUsd": "600913392948.3738693718152750",
      "volumeUsd24Hr": "12416338708.1862424369243710",
      "priceUsd": "31535.5261615116074742",
      "changePercent24Hr": "0.1116606177966628",
      "vwap24Hr": "31718.0439558917366477",
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
