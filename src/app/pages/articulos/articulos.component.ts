import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.css']
})
export class ArticulosComponent implements OnInit {

  constructor(public http:HttpClient) { }

  ngOnInit(): void {

    this.http.get('https://localhost:7286/api/Articulos/ObtenerStockArticulos').subscribe(r => {
      debugger;
    })

  }

}
