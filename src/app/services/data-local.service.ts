import { Injectable } from '@angular/core';
import { PeliculaDetalle } from '../interfaces/interfaces';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

  constructor(
    private storage: Storage
  ) {

    this.storage.create();
    this.cargarFavoritos();
  }
  private _storage: Storage | null = null;
  peliculas: PeliculaDetalle[] = [];

  async initDB() {
    // If using, define drivers here: await this.storage.defineDriver(/*...*/);
    const storage = await this.storage.create();
    this._storage = storage;
  }

  guardarPelicula(pelicula: PeliculaDetalle) {


    let existe = this.peliculas.find(peli => peli.id === pelicula.id)

    if (!existe) {
      this.peliculas.push(pelicula);
    } else {
      this.peliculas = this.peliculas.filter(peli => peli.id !== pelicula.id);
    }
    this.storage?.set('peliculas', this.peliculas);
    return !existe;
  }
  async cargarFavoritos() {
    const pelicula = await this.storage.get('peliculas');
    this.peliculas = pelicula || [];
    return this.peliculas;
  }
  async existePelicula(id) {

    await this.cargarFavoritos();
    const existe = this.peliculas.find(peli => peli.id === id);
    return (existe) ? true : false;
  }

}
