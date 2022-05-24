import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LayoutComponent} from "./components/layout/layout.component";
import {CryptoListComponent} from "./components/crypto-list/crypto-list.component";
import {CryptosComponent} from "./pages/cryptos/cryptos.component";
import {CryptoDetailComponent} from "./pages/crypto-detail/crypto-detail.component";

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: CryptosComponent,
      },
      {
        path: ':id',
        component: CryptoDetailComponent,
        data: {
          breadcrumb: 'Detail'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CryptoMonitoringRoutingModule { }
