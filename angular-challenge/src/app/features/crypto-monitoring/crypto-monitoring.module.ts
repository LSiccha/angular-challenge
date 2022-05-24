import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CryptoMonitoringRoutingModule } from './crypto-monitoring-routing.module';
import { LayoutComponent } from './components/layout/layout.component';
import {SharedModule} from "../../shared/shared.module";
import { CryptoListComponent } from './components/crypto-list/crypto-list.component';
import { CryptosComponent } from './pages/cryptos/cryptos.component';
import { CryptoDetailComponent } from './pages/crypto-detail/crypto-detail.component';
import { StockChartComponent } from './components/stock-chart/stock-chart.component';
import { IntervalSelectorComponent } from './components/interval-selector/interval-selector.component';
import { DatePickerComponent } from './components/date-picker/date-picker.component';


@NgModule({
  declarations: [
    LayoutComponent,
    CryptoListComponent,
    CryptosComponent,
    CryptoDetailComponent,
    StockChartComponent,
    IntervalSelectorComponent,
    DatePickerComponent
  ],
  imports: [
    CommonModule,
    CryptoMonitoringRoutingModule,
    SharedModule
  ]
})
export class CryptoMonitoringModule { }
