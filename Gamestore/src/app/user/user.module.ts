import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogComponent } from './catalog/catalog.component';
import { DetailsComponent } from './details/details.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { CreateComponent } from './create/create.component';

@NgModule({
  declarations: [
    CatalogComponent,
    DetailsComponent,
    CreateComponent
  ],
  imports: [
    CommonModule, RouterModule, SharedModule
  ],
  exports: [
    CatalogComponent,
    DetailsComponent,
    CreateComponent
  ]
})
export class UserModule { }
