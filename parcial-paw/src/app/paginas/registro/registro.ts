import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registro',
  imports: [FormsModule],
  templateUrl: './registro.html',
  styleUrl: './registro.css',
})
export class Registro {
  registrado = false;

  datos = {
    nombre: '',
    correo: '',
    interes: '',
    mensaje: '',
  };

  registrar(): void {
    this.registrado = true;
  }
}