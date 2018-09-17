import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms' 


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MoviesComponent } from './movies/movies.component';
import { TvShowsComponent } from './tv-shows/tv-shows.component';
import { CelebritiesComponent } from './celebrities/celebrities.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { TvshowDetailsComponent } from './tvshow-details/tvshow-details.component';
import { CelebrityDetailsComponent } from './celebrity-details/celebrity-details.component';
import { AboutComponent } from './about/about.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    MoviesComponent,
    TvShowsComponent,
    CelebritiesComponent,
    MovieDetailsComponent,
    TvshowDetailsComponent,
    CelebrityDetailsComponent,
    AboutComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
