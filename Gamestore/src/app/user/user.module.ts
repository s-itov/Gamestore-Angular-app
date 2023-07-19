import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogComponent } from './catalog/catalog.component';
import { DetailsComponent } from './details/details.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    CatalogComponent,
    DetailsComponent,
    CreateComponent,
    EditComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule, RouterModule, SharedModule
  ],
  exports: [
    CatalogComponent,
    DetailsComponent,
    CreateComponent,
    EditComponent,
    ProfileComponent
  ]
})
export class UserModule { }
