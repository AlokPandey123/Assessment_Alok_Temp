import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddDataRoutingModule } from './add-data-routing.module';
import { AddDataComponent } from './add-data.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list'; 
import { MatCardModule } from '@angular/material/card'; 
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';




@NgModule({
  declarations: [AddDataComponent],
  imports: [
    CommonModule,
    AddDataRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatCardModule, 
    MatIconModule,
    MatDatepickerModule, 
    MatNativeDateModule,
  ]
})
export class AddDataModule { }
