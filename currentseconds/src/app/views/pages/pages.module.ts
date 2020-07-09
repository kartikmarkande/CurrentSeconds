import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecondsComponent } from './seconds/seconds.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [SecondsComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule
  ]
})
export class PagesModule { }
