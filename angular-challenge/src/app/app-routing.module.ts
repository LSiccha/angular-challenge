import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/crypto' },
  { path: 'crypto',
    loadChildren: () =>
      import('./features/crypto-monitoring/crypto-monitoring.module').
      then(m => m.CryptoMonitoringModule),
    data: {
      breadcrumb: 'Cryptocurrencies'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
