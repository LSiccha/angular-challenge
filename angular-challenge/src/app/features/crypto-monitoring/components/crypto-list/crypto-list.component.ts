import {Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {Asset} from "../../services/models/asset";

@Component({
  selector: 'app-crypto-list',
  templateUrl: './crypto-list.component.html',
  styleUrls: ['./crypto-list.component.css']
})
export class CryptoListComponent implements OnInit, OnChanges {

  @ViewChild('searchByName') searchInput!: ElementRef
  @Input() data: Asset[] = []
  displayData: Asset[] = []
  listOfCurrentPageData: readonly Asset[] = []

  rankHeader = {
    title: 'Rank',
    compare: (a: Asset, b: Asset) => Number(a.rank) - Number(b.rank),
    priority: 1
  }

  setOfCheckedId = new Set<string>();
  searchValue = ''
  visible: boolean = false;
  checked = false;
  listOfColumn = [

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
    this.displayData = this.data.filter((item: Asset) => {
      let name = item.name.toLowerCase();
      return name.indexOf(this.searchValue.toLowerCase()) !== -1
    });

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


  onAllChecked(checked: boolean) {
    console.log(this.setOfCheckedId)

    this.listOfCurrentPageData
      .forEach(({ id }) => this.updateCheckedSet(id, checked));
    this.refreshCheckedStatus();
  }

  private updateCheckedSet(id: string, checked: any) {
    if (checked) {
      this.setOfCheckedId.add(id);
    } else {
      this.setOfCheckedId.delete(id);
    }
    console.log(this.setOfCheckedId)
  }

  private refreshCheckedStatus(): void {
    this.checked = this.displayData.every(({ id }) => this.setOfCheckedId.has(id));
  }

  onItemChecked(id: string, checked: boolean) {
    this.updateCheckedSet(id, checked);
    this.refreshCheckedStatus();
  }

  onCurrentPageDataChange(data: readonly Asset[]) {
    this.listOfCurrentPageData = data;
    this.refreshCheckedStatus()
  }
}
