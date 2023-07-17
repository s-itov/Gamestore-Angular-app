import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes, UrlSerializer } from '@angular/router';
import { CoreModule } from './core/core.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

import { HeroComponent } from './core/hero/hero.component';
import { CatalogComponent } from './user/catalog/catalog.component';
import { ContactUsComponent } from './core/contact-us/contact-us.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { SharedModule } from './shared/shared.module';
import { DetailsComponent } from './user/details/details.component';

const appRoutes: Routes = [
  { path: '', pathMatch: 'full', component: HeroComponent },
  { path: 'catalog', component: CatalogComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  // { path: ':id/details', pathMatch: 'full', component: DetailsComponent },
  //   { path: 'create', component: CreateComponent, canActivate: [loginGuard] },
  //   {
  //     path: ':id/edit',
  //     pathMatch: 'full',
  //     component: EditComponent,
  //     canActivate: [loginGuard, ownerGuard],
  //   },
  //   { path: 'profile', component: ProfileComponent, canActivate: [loginGuard] },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    AuthModule,
    UserModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
