import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { InicioComponent } from './inicio/inicio.component';
import { NabvarComponent } from './nabvar/nabvar.component';
import { UsersComponent } from './users/users.component';
import { ReportsComponent } from './reports/reports.component';
import { CreateUsersComponent } from './users/create-users/create-users.component';


@NgModule({
  declarations: [
    DashboardComponent,
    InicioComponent,
    NabvarComponent,
    UsersComponent,
    ReportsComponent,
    CreateUsersComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
