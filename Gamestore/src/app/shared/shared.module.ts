import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { CardComponent } from './card/card.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [
    NotFoundComponent,
    CardComponent,
    SpinnerComponent,
    ModalComponent
  ],
  imports: [
    CommonModule, RouterModule
  ],
  exports: [
    NotFoundComponent,
    CardComponent,
    SpinnerComponent,
    ModalComponent
  ]
})
export class SharedModule { }
