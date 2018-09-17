import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MoviesComponent } from './movies/movies.component';
import { TvShowsComponent } from './tv-shows/tv-shows.component';
import { CelebritiesComponent } from './celebrities/celebrities.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { TvshowDetailsComponent } from './tvshow-details/tvshow-details.component';
import { CelebrityDetailsComponent } from './celebrity-details/celebrity-details.component';

const routes: Routes = [
  { path : "login" , component : LoginComponent },
  { path : "register" , component : RegisterComponent },

  { path : "movies" , component : MoviesComponent },
  { path : "movieDetails/:id" ,  component : MovieDetailsComponent } ,

  { path : "tvShows" , component : TvShowsComponent },
  { path : "tvShowDetails/:id" , component : TvshowDetailsComponent},

  { path : "celebrities" , component : CelebritiesComponent },
  { path : "celebrity/:id" , component : CelebrityDetailsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
