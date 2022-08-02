import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent implements OnInit {

  @ViewChild('txtBuscar') textBuscar!: ElementRef<HTMLInputElement>;

  constructor(private gifsServices: GifsService) { }

  ngOnInit(): void {
  }

  buscar(){
    const valor = this.textBuscar.nativeElement.value
    if (valor == '') return
    this.gifsServices.buscarGifs( valor )
    this.textBuscar.nativeElement.value = ''
  }
}
