import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin! : FormGroup;

  constructor( private fb: FormBuilder) { 

    this.login();
  }

  ngOnInit(): void {
  }

  get correoNoValido() {
    return this.formLogin.get('correo')?.invalid && this.formLogin.get('correo')?.touched
  }

  get contrasenaNoValido() {
    return this.formLogin.get('contrasena')?.invalid && this.formLogin.get('contrasena')?.touched
  }


  login() {

    this.formLogin = this.fb.group({
      correo: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')] ],
      contrasena: ['', [Validators.required, Validators.minLength(1)]],
    });

  }

  ingresar() {

    console.log(this.formLogin);

  }

}
