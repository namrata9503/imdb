import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MoviesComponent } from './movies/movies.component';
import { TvShowsComponent } from './tv-shows/tv-shows.component';
import { CelebritiesComponent } from './celebrities/celebrities.component';

const routes: Routes = [
  { path : "login" , component : LoginComponent },
  { path : "register" , component : RegisterComponent },
  { path : "movies" , component : MoviesComponent },
  { path : "tvShows" , component : TvShowsComponent },
  { path : "celebrities" , component : CelebritiesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
