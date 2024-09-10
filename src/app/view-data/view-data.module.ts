import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewDataRoutingModule } from './view-data-routing.module';
import { ViewDataComponent } from './view-data.component';
import { NgChartsModule } from 'ng2-charts';
import { MatCardModule } from '@angular/material/card'; 

@NgModule({
  declarations: [ViewDataComponent],
  imports: [
    CommonModule,
    ViewDataRoutingModule,
    NgChartsModule,
    MatCardModule

  ]
})
export class ViewDataModule { }
