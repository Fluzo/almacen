import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioModel } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  usuario!: UsuarioModel;
  formRegistro!: FormGroup;

  constructor( private fb: FormBuilder) { 
    this.registrar();
  }

  ngOnInit(): void {

    // this.usuario = new UsuarioModel();
  }

  get nombreNoValido() {
    return this.formRegistro.get('nombre')?.invalid && this.formRegistro.get('nombre')?.touched
  }

  get correoNoValido() {
    return this.formRegistro.get('correo')?.invalid && this.formRegistro.get('correo')?.touched
  }

  get contrasenaNoValido() {
    return this.formRegistro.get('contrasena')?.invalid && this.formRegistro.get('contrasena')?.touched
  }

  get contrasena2NoValido() {
    return this.formRegistro.get('contrasena2')?.invalid && this.formRegistro.get('contrasena2')?.touched
  }


  registrar(){
    
    this.formRegistro = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(1)]],
      correo: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')] ],
      contrasena: ['', [Validators.required, Validators.minLength(1)]],
      contrasena2: ['', [Validators.required, Validators.minLength(1)]],
    });

  }

  submit(){
    console.log(this.formRegistro);
  }

}
