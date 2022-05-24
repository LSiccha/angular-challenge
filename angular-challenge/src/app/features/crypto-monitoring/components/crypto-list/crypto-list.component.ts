import {Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {Asset} from "../../models/asset";

@Component({
  selector: 'app-crypto-list',
  templateUrl: './crypto-list.component.html',
  styleUrls: ['./crypto-list.component.css']
})
export class CryptoListComponent implements OnInit, OnChanges {

  @ViewChild('searchByName') searchInput!: ElementRef
  @Input() data: Asset[] = []
  displayData: Asset[] = []
  searchValue = ''
  visible: boolean = false;

  listOfColumn = [
    {
      title: 'Rank',
      compare: (a: Asset, b: Asset) => Number(a.rank) - Number(b.rank),
      priority: 1
    },
    {
      title: 'Last Price',
      compare: (a: Asset, b: Asset) => Number(a.priceUsd) - Number(b.priceUsd),
      priority: 2
    },
    {
      title: 'Change 24Hr',
      compare: (a: Asset, b: Asset) => Number(a.changePercent24Hr) - Number(b.changePercent24Hr),
      priority: 3
    },
    {
      title: 'Supply',
      compare: (a: Asset, b: Asset) => Number(a.supply) - Number(b.supply),
      priority: 4
    },
    {
      title: 'Market Cap',
      compare: (a: Asset, b: Asset) => Number(a.marketCapUsd) - Number(b.marketCapUsd),
      priority: 4
    }
  ];

  constructor() { }

  search(): void {
    this.visible = false;
    this.displayData = this.data.filter((item: Asset) => item.name.indexOf(this.searchValue) !== -1);

  }

  reset() {
    this.searchValue = ''
    this.search();
  }


  focusInput() {
    setTimeout(() => this.searchInput.nativeElement.focus());
    this.searchInput.nativeElement.focus()
    console.log(this.searchInput.nativeElement)
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.data){
      this.displayData = this.data;
    }
  }


}
