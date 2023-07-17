import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes, UrlSerializer} from '@angular/router';
import { CoreModule } from './core/core.module';
import { UserModule } from './user/user.module';

const appRoutes: Routes = [
//   { path: '', pathMatch: 'full', component: HeroSectionComponent },
//   { path: 'catalog', component: CatalogComponent },
//   { path: 'about-us', component: AboutUsComponent },
//   { path: 'contact-us', component: ContactUsComponent },
//   { path: 'login', component: LoginComponent },
//   { path: 'register', component: RegisterComponent },
//   { path: ':id/details', pathMatch: 'full', component: DetailsComponent },
//   { path: 'create', component: CreateComponent, canActivate: [loginGuard] },
//   {
//     path: ':id/edit',
//     pathMatch: 'full',
//     component: EditComponent,
//     canActivate: [loginGuard, ownerGuard],
//   },
//   { path: 'profile', component: ProfileComponent, canActivate: [loginGuard] },
//   { path: '**', component: NotFoundComponent },
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    UserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
