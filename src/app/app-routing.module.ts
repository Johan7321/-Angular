import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { ContactoComponent } from './components/contacto/contacto.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'inicio', component: HomeComponent },
  { path: 'peliculas', component: PeliculasComponent },
  { path: 'cine-terror', component: PeliculasComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }