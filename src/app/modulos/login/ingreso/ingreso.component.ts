import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.scss']
})
export class IngresoComponent {

  form: FormGroup;
  loading = false;

  constructor(private fb: FormBuilder,
              private _snackBar: MatSnackBar,
              private router: Router){
    this.form = this.fb.group({
      usuario: ['', Validators.required],
      password: ['', Validators.required]

    })
  }
  

  ingresar(){
    console.log(this.form);
    const usuario = this.form.value.usuario;
    const password = this.form.value.password;
    
    if(usuario == 'cristiantorres@gmail.com' && password == '101010'){
      this.loadingLogin();
      //redireccionar 
    }else{
      this.error();
      this.form.reset();
    }

  }

  error(){
    this._snackBar.open('Usuario o contraseña ingresado son incorrecto', '',{
      duration: 2000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })
  }

  loadingLogin(){
    this.loading = true;
    setTimeout(() => {
      //redireccionar al home
      this.router.navigate(['/dashboard']);
    this.loading = false;
    }, 100
    );
  }
}
