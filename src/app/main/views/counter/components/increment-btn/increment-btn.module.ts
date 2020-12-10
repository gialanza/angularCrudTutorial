import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [IncrementBtnModule],
  imports: [
    CommonModule,
    ButtonModule
  ],
  exports:[IncrementBtnModule]
})
export class IncrementBtnModule { }
