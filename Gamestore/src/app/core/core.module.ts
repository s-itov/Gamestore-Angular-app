import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HeroComponent } from './hero/hero.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SharedModule } from '../shared/shared.module';
import { GlobalLoaderComponent } from './global-loader/global-loader.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HeroComponent,
    ContactUsComponent,
    GlobalLoaderComponent,
  ],
  imports: [
    CommonModule, RouterModule, SharedModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    HeroComponent,
    ContactUsComponent,
    GlobalLoaderComponent,
  ]
})
export class CoreModule { }
