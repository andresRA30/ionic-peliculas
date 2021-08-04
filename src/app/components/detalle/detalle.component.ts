import { Component, Input, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { PeliculaDetalle, Cast } from '../../interfaces/interfaces';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
})
export class DetalleComponent implements OnInit {
  @Input() id;
  pelicula: PeliculaDetalle;
  actores: Cast[] = [];
  oculto = 150;
  slideOptActores = {
    slidesPerView: 3.3,
    freeMode: true,
    spacebetween: -5
  }
  constructor(private movieService: MoviesService, private modalCtrl: ModalController) { }

  ngOnInit() {
    this.movieService.getPeliculaDetalle(this.id)
      .subscribe(resp => {
        this.pelicula = resp;
      })
    this.movieService.getActoresPelicula(this.id)
      .subscribe(resp => {
        this.actores = resp.cast;
      })
  }
  regresar() {
    this.modalCtrl.dismiss();
  }
}