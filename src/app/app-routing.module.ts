import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomepageComponent } from "./components/homepage/homepage.component";
import { LiveComponent } from './components/live/live.component';

const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'live', component: LiveComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
