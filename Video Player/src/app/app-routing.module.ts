import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VideoCenterComponent } from './video-center/video-center.component';
import { HomeComponent } from './home/home.component';
import { VphomeComponent } from './vphome/vphome.component';
import { SearchDetailComponent } from './search-detail/search-detail.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'search', component: SearchDetailComponent},
  {path: 'vphome', component: VphomeComponent},
  {path: 'home', component: HomeComponent },
  {path: 'videos', component: VideoCenterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
