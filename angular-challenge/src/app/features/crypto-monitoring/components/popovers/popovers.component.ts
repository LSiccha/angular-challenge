import { Component, OnInit } from '@angular/core';

export interface Exchange {
  name: string,
  url: string,
  description: string,
  logo: string
}

@Component({
  selector: 'app-popovers',
  templateUrl: './popovers.component.html',
  styleUrls: ['./popovers.component.css']
})
export class PopoversComponent implements OnInit {
  visible: boolean = false;
  exchanges: Exchange[] = [
    {
      name: 'Binance',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tintulum',
      url: 'https://www.binance.com/es',
      logo: 'https://play-lh.googleusercontent.com/T1_WHAGs5WZePQejNSqqrxZah4uhBvYr698nTCFhXMjMZo5oSCoko5yW2wtmeO1ClRU'
    },
    {
      name: 'Coinbase',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tintulum',
      url: 'https://www.coinbase.com/es',
      logo: 'https://play-lh.googleusercontent.com/PjoJoG27miSglVBXoXrxBSLveV6e3EeBPpNY55aiUUBM9Q1RCETKCOqdOkX2ZydqVf0'
    },
    {
      name: 'Crypto.com',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tintulum',
      url: 'https://crypto.com/',
      logo: 'https://play-lh.googleusercontent.com/EWSb1Tq96I89dINuaSyaslC2Xfy_Lglr2ZJhtp0yDUvS59982Z34MI2vcqyqcBDtiwc'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  goToExchange(url: string) {
    window.open(url, "_blank")
  }
}
