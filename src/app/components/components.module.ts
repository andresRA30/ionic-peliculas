import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { SlideshowBackdropComponent } from './slideshow-backdrop/slideshow-backdrop.component';
import { PipesModule } from '../pipes/pipes.module';
import { SlidePosterComponent } from './slide-poster/slide-poster.component';
import { SlideshowParesComponent } from './slideshow-pares/slideshow-pares.component';
import { DetalleComponent } from './detalle/detalle.component';



@NgModule({

  declarations: [SlideshowBackdropComponent, SlidePosterComponent, SlideshowParesComponent, DetalleComponent],
  exports: [SlideshowBackdropComponent, SlidePosterComponent, SlideshowParesComponent, DetalleComponent],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule
  ]
})
export class ComponentsModule { }
