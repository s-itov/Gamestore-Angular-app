import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { CardComponent } from './card/card.component';
import { SpinnerComponent } from './spinner/spinner.component';

@NgModule({
  declarations: [
    NotFoundComponent,
    CardComponent,
    SpinnerComponent
  ],
  imports: [
    CommonModule, RouterModule
  ],
  exports: [
    NotFoundComponent,
    CardComponent,
    SpinnerComponent
  ]
})
export class SharedModule { }
