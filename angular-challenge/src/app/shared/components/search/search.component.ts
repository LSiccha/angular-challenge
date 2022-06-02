import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {AppState} from "../../../core/store";
import {Observable} from "rxjs";
import {Asset} from "../../../features/crypto-monitoring/services/models/asset";
import {Router} from "@angular/router";

export interface Option {
  title: string,
  value: number
}

export interface OptionGroup {
  title: string,
  count?: number,
  children?: Option[]
}


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  assets: Observable<Asset[]>
  dataAssets: Asset[] = []
  filteredData: Asset[] = []
  inputValue: string = ''

  optionGroups = [{
    title: 'Cryptoassets',
    count: 3,
    children: this.filteredData
  },
  ];


  constructor(
    private store: Store<AppState>,
    private router: Router
  ) {
    this.assets = this.store.select('assets')
    this.assets.subscribe(data=> {
      this.dataAssets = data
      this.filteredData = this.dataAssets
      this.optionGroups[0].children = this.filteredData
    })
  }

  ngOnInit(): void {
  }

  onChange(input: string){
    this.filteredData = this.dataAssets.filter(row => {
      return row.name.toLowerCase().indexOf(input.toLowerCase()) !== -1
    })
    this.optionGroups[0].children = this.filteredData
  }

  reset(){
    this.inputValue = '';
  }

  navigate(id: string) {
    this.router.navigateByUrl('/crypto',{skipLocationChange: true})
      .then(() => this.router.navigate([`crypto/${id}`]) )

  }
}
