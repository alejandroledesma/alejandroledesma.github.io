import { ModuleWithProviders, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { ReposModule } from './repos/repos.module';
import { ProfileModule } from './profile/profile.module';

import {
  FooterComponent,
  HeaderComponent,
  ApiService,
  RepositoriesService,
  UserService
} from './shared';

const rootRouting: ModuleWithProviders = RouterModule.forRoot([], { useHash: true });

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HomeModule,
    ReposModule,
    ProfileModule,
    rootRouting
  ],
  providers: [
    ApiService,
    RepositoriesService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }