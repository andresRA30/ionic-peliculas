import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Pelicula } from 'src/app/interfaces/interfaces';
import { DetalleComponent } from '../detalle/detalle.component';

@Component({
  selector: 'app-slide-poster',
  templateUrl: './slide-poster.component.html',
  styleUrls: ['./slide-poster.component.scss'],
})
export class SlidePosterComponent implements OnInit {
  slideOpts = {
    slidesPerView: 3.3,
    freeMode: true
  }
  @Input() peliculas: Pelicula[] = [];
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() { }
  async verDetalle(id: number) {
    const modal = await this.modalCtrl.create({
      component: DetalleComponent,
      componentProps: {
        id
      }
    });
    modal.present();
  }
}
