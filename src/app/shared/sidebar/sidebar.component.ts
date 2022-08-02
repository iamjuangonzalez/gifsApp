import { Component, OnInit } from '@angular/core';
import { SearchResponse } from 'src/app/gifs/interface/gifs.interface';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent implements OnInit {
  get gifsHistorial(): string[] {
    return this.gifsService.historial;
  }

  constructor(private gifsService: GifsService) {}

  ngOnInit(): void {}

  buscar(item: any) {
    this.gifsService.buscarGifs(item)
  }
}
