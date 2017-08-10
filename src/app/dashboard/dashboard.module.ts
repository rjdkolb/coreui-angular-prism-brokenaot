import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';

/* Import prism core */
import 'prismjs/prism';
/* Import the language you need to highlight */
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-java';

import { PrismComponent } from 'angular-prism';

@NgModule({
  imports: [
    DashboardRoutingModule,
    ChartsModule
  ],
  declarations: [ DashboardComponent,PrismComponent ]
})
export class DashboardModule { }
