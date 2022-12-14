import { Component, } from '@angular/core';
import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: [ ]
})
export class PorRegionComponent {

  regiones: string[] = ['EU','EFTA','CARICOM','PA','AU','USAN','EEU','AL','ASEAN','CAIS','CEFTA','NAFTA','SAARC'];
  regionActiva: string = '';
  paises: Pais[] = [];

  constructor( private paisService: PaisService) { }

  getClaseCSS( region: string): string{
    return (region === this.regionActiva) 
            ? 'btn btn-primary mr-5'
            : 'btn btn-outline-primary mr-5'
  }

  activarRegion( region:string ): void{

    if( region === this.regionActiva) { return; }

    this.regionActiva = region;
    this.paises = [];

    this.paisService.buscarRegion( this.regionActiva )
      .subscribe( paises => this.paises = paises);
  }

}
