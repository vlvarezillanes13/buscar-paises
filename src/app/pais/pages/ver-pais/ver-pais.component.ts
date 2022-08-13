import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: []
})
export class VerPaisComponent implements OnInit {

  pais!: Pais;

  constructor( 
    private activateRoute: ActivatedRoute,
    private paisService: PaisService,
    ) { }

  ngOnInit(): void {
    
    this.activateRoute.params
      .pipe(
        switchMap( ({id}) => this.paisService.getPaisPorId( id ) )
      )
      .subscribe( pais => {
        if( pais.length === 1){
          this.pais = pais[0];
        }
      });

    // this.activateRoute.params
    //   .subscribe( ({id}) => {
    //     this.paisService.getPaisPorId( id )
    //       .subscribe( pais => {
            
    //       })
    //   })
  }

}
