import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    NotFoundComponent,
    CardComponent
  ],
  imports: [
    CommonModule, RouterModule
  ],
  exports: [
    NotFoundComponent,
    CardComponent
  ]
})
export class SharedModule { }
