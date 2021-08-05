import { Component } from '@angular/core';
import { Genre, PeliculaDetalle } from '../interfaces/interfaces';
import { DataLocalService } from '../services/data-local.service';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  peliculas: PeliculaDetalle[] = [];
  generos: Genre[] = [];

  favoritosGenero = []
  constructor(private dataService: DataLocalService, private moviesService: MoviesService) { }

  async ionViewWillEnter() {
    this.peliculas = await this.dataService.cargarFavoritos();
    this.generos = await this.moviesService.cargarGeneros();
    this.pelisPorGenero(this.generos, this.peliculas)
  }
  pelisPorGenero(generos: Genre[], peliculas: PeliculaDetalle[]) {
    this.favoritosGenero = [];

    generos.forEach(genero => {
      this.favoritosGenero.push({ "genero": genero.name, "pelis": peliculas.filter(peli => peli.genres.find(g => g.name == genero.name)) })
    })
    console.log(this.favoritosGenero)

  }
}
