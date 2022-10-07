import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PrincipalInfosComponent } from './components/principal-infos/principal-infos.component';
import { NgChartsModule } from 'ng2-charts';
import { LineChartComponent } from './components/line-chart/line-chart.component';


@NgModule({
  declarations: [
    DashboardComponent,
    PrincipalInfosComponent,
    LineChartComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    NgChartsModule
  ]
})
export class DashboardModule { }
