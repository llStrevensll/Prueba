import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { HorasExtras } from '../models/horasExtras';

@Injectable({
  providedIn: 'root'
})
export class HorasExtrasService {

  //horas Extras
  horasExtras: HorasExtras[];
  seleccionHE: HorasExtras;


  constructor(private http: HttpClient) {
    this.seleccionHE = new HorasExtras();
   }

  readonly URL = 'http://localhost:3000/horasExtras';

  // Get
  gethorasExtras() {
    return this.http.get(this.URL);
  }

  // Post -Crear
  posthorasExtras(horasExtras: HorasExtras) {
    console.log("POSTTTTTT FINALL");

    console.log(horasExtras);

    return this.http.post(this.URL, horasExtras);
  }
}
