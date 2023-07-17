import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HeroComponent } from './hero/hero.component';
import { ContactUsComponent } from './contact-us/contact-us.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HeroComponent,
    ContactUsComponent,
  ],
  imports: [
    CommonModule, RouterModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    HeroComponent,
    ContactUsComponent
  ]
})
export class CoreModule { }
