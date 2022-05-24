import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CryptoMonitoringRoutingModule } from './crypto-monitoring-routing.module';
import { LayoutComponent } from './components/layout/layout.component';
import {SharedModule} from "../../shared/shared.module";


@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    CryptoMonitoringRoutingModule,
    SharedModule
  ]
})
export class CryptoMonitoringModule { }
