import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CryptoMonitoringRoutingModule } from './crypto-monitoring-routing.module';
import {SharedModule} from "../../shared/shared.module";
import { CryptoListComponent } from './components/crypto-list/crypto-list.component';
import { CryptosComponent } from './pages/cryptos/cryptos.component';
import { CryptoDetailComponent } from './pages/crypto-detail/crypto-detail.component';
import { StockChartComponent } from './components/stock-chart/stock-chart.component';
import { HighlightCardComponent } from './components/highlight-card/highlight-card.component';
import {UiModule} from "../../ui/ui.module";
import { GraphControlsComponent } from './components/graph-controls/graph-controls.component';
import { PriceConverterComponent } from './components/price-converter/price-converter.component';
import { CommentsComponent } from './components/comments/comments.component';
import {ScrollingModule} from "@angular/cdk/scrolling";
import { PopoversComponent } from './components/popovers/popovers.component';


@NgModule({
  declarations: [
    CryptoListComponent,
    CryptosComponent,
    CryptoDetailComponent,
    StockChartComponent,
    HighlightCardComponent,
    GraphControlsComponent,
    PriceConverterComponent,
    CommentsComponent,
    PopoversComponent,
  ],
  exports: [
  ],
    imports: [
        CommonModule,
        CryptoMonitoringRoutingModule,
        SharedModule,
        UiModule
    ]
})
export class CryptoMonitoringModule { }
