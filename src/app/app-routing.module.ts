import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomepageComponent } from "./components/homepage/homepage.component";
import { LiveComponent } from './components/live/live.component';
import { SummaryComponent } from './components/summary/summary.component';
import { AboutComponent } from "./components/about/about.component";

const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'live', component: LiveComponent},
  {path: 'summary', component: SummaryComponent},
  {path: 'about', component: AboutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
