import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DetalleComponent } from '../components/detalle/detalle.component';
import { Pelicula } from '../interfaces/interfaces';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  textoBuscar: string = "";
  ideas: string[] = ['spiderman', 'Avenger', 'Soy Leyenda']
  peliculas: Pelicula[] = [];
  cargando = false;
  constructor(private movieService: MoviesService, private modalCtrl: ModalController) { }
  buscar(event) {
    this.cargando = true;
    const valor = event.detail.value;

    if (valor.trim() === "") {
      this.cargando = false;
      this.peliculas = [];
      return;
    }
    this.movieService.buscarPeliculas(valor)
      .subscribe(resp => {
        this.cargando = false;
        this.peliculas = resp.results;

      })
  }
  seleccionarIdea(idea: string) {
    this.textoBuscar = idea;
  }
  async infoPeli(id: number) {
    const modal = await this.modalCtrl.create({
      component: DetalleComponent,
      componentProps: {
        id
      }
    });
    modal.present();
  }
}
