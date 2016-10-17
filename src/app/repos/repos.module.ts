import { ModuleWithProviders, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { ReposComponent } from './repos.component';

const reposRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'repositories',
    component: ReposComponent
  }
]);

@NgModule({
  imports: [
    reposRouting,
    BrowserModule
  ],
  declarations: [
    ReposComponent
  ],
  providers: []
})
export class ReposModule {}
