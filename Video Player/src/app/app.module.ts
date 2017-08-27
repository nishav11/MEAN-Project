import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselModule} from 'ngx-bootstrap/carousel';
import { VideoCenterComponent } from './video-center/video-center.component';
import { VideoListComponent } from './video-list/video-list.component';
import { VideoDetailComponent } from './video-detail/video-detail.component';
import { SafePipe } from './safe.pipe';
import { HomeComponent } from './home/home.component';
import { VphomeComponent } from './vphome/vphome.component';


@NgModule({
  declarations: [
    AppComponent,
    VideoCenterComponent,
    VideoListComponent,
    VideoDetailComponent,
    HomeComponent,
    SafePipe,
    VphomeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    // ngx-bootstrap
    CarouselModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
