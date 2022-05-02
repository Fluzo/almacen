import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.css']
})
export class ArticulosComponent implements OnInit {

  constructor(public http:HttpClient) { }

  ngOnInit(): void {

  }

  ConsultarArticulos() {
    const httpOptions = {
      headers: new HttpHeaders({ 
        "Access-Control-Allow-Origin":"*"
      })
    };
    this.http.get('https://localhost:7286/api/Articulos/ObtenerStockArticulos',httpOptions).subscribe(r => {
      console.log(r);
    })
  }

}
