import { ModuleWithProviders, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { ProfileComponent } from './profile.component';

const profileRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'profile',
    component: ProfileComponent
  }
]);

@NgModule({
  imports: [
    profileRouting,
    BrowserModule
  ],
  declarations: [
    ProfileComponent
  ],
  providers: []
})
export class ProfileModule {}
