import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';


@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.scss']
})



export class IngresoComponent implements OnInit {
  username!:string;
  password!: string;
 /*  loginForm:FormGroup; */



/*   public myForm!:FormBuilder; */









/* 
  form: FormGroup; */
/*   loading = false; */

  constructor(
    
    
   /*  private fb: FormBuilder,
              private _snackBar: MatSnackBar,
              private router: Router */){
   /*  this.form = this.fb.group({
      usuario: ['', Validators.required],
      password: ['', Validators.required]

    }) */
  }
  ngOnInit(){



   /*  this.loginForm = new FormGroup({
      email: new FormControl('',[Validators.required, Validators.email]),
      password : new FormControl('',[Validators.required, Validators.minLength(8)])
    }); */
  }



  
  /* 
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
      this.router.navigate(['/home']);
    this.loading = false;
    }, 100
    );
  } */

  loginUser(){
    if(this.username == "admin" && this.password== "admin123"){
      console.log("welcome");
    }
  }
}
