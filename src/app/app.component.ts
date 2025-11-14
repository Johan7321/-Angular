import { Component, OnInit } from '@angular/core';
import moviesData from '../assets/movies.json';
import { Router } from '@angular/router';

interface Pelicula { 
  titulo:string; 
  anio:number; 
  actor:string; 
  descripcion:string; 
  imagen:string; 
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  peliculas: Pelicula[] = [];
  peliculasFiltradas: Pelicula[] = [];
  anios: number[] = [];
  filtroAnio = 'Todos';
  orden = 'recientes';
  busqueda = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.peliculas = (moviesData as unknown) as Pelicula[];
    const aniosSet = new Set<number>();
    this.peliculas.forEach(p => aniosSet.add(p.anio));
    this.anios = Array.from(aniosSet).sort((a,b)=>b-a);
    this.peliculasFiltradas = [...this.peliculas];
  }

  showNavbar(): boolean {
    return this.router.url === '/peliculas';
  }

  filtrar(): void {
    let resultado = [...this.peliculas];
    if (this.filtroAnio !== 'Todos') {
      resultado = resultado.filter(p => p.anio.toString() === this.filtroAnio);
    }
    if (this.busqueda.trim() !== '') {
      const texto = this.busqueda.toLowerCase();
      resultado = resultado.filter(p => p.titulo.toLowerCase().includes(texto) || p.actor.toLowerCase().includes(texto));
    }
    if (this.orden === 'recientes') resultado.sort((a,b)=>b.anio - a.anio); else resultado.sort((a,b)=>a.anio - b.anio);
    this.peliculasFiltradas = resultado;
  }

  restablecer(): void {
    this.filtroAnio = 'Todos';
    this.orden = 'recientes';
    this.busqueda = '';
    this.peliculasFiltradas = [...this.peliculas];
  }
}