import { Component, OnInit } from '@angular/core';
import { HorasExtras } from 'src/app/models/horasExtras';
import { HorasExtrasService } from '../../service/horas-extras.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-horas-extras',
  templateUrl: './horas-extras.component.html',
  styleUrls: ['./horas-extras.component.css']
})
export class HorasExtrasComponent implements OnInit {

  constructor(public horasExtrasService: HorasExtrasService) { }

  ngOnInit(): void {
    this.horasExtrasService.gethorasExtras();
  }


  // Obtener data
  getHorasExtras() {
    this.horasExtrasService.gethorasExtras()
      .subscribe(res => {
        this.horasExtrasService.horasExtras = res as HorasExtras[];
        console.log(res);
      });
  }

  // Post - Crear
  postHorasExtras(form: NgForm) {
    this.horasExtrasService.posthorasExtras(form.value)
        .subscribe(res => {
          console.log('Creado');
          this.resetForm();
          this.getHorasExtras();
        });
    // Verificar si ya existe registro
    /*
    if(form.value.id) {
      this.horasExtrasService.posthorasExtras(form.value)
        .subscribe(res => {
          console.log('Actualizo');
          this.resetForm();
          this.getHorasExtras();
        });
    } else {
      this.horasExtrasService.posthorasExtras(form.value)
        .subscribe(res => {
          console.log('Creado');
          this.resetForm();
          this.getHorasExtras();
        });
    }*/

  }

  // Resetear Formulario
  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.horasExtrasService.seleccionHE = new HorasExtras();
    }
  }


}
