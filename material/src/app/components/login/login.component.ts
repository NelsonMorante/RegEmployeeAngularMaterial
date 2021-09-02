import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import {faUser, faKey } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  faUser= faUser;
  faKey =faKey;
  form: FormGroup;
  loading = false;
  constructor( private fb: FormBuilder, private _snackBar: MatSnackBar, private router: Router) {
    this.form = this.fb.group({
      user: ['', Validators.required],
      password: ['',Validators.required]
    })
  }

  ngOnInit(): void {
  }
  getIn(){
    const user = this.form.value.user;
    const password = this.form.value.password;
    
    if (user == 'jperes' && password == 'admin123') {
      //direccionamos al dashboard
    this.fakeLoading();
    }else{
      //mostramos un mensaje de error
      this.error();
      this.form.reset();
    }
  }

  error(){
    this._snackBar.open('usuario o contraseña invalidos','', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })
  }

  fakeLoading(){
    this.loading = true;
    setTimeout(() => {

      this.router.navigate(['dashboard']);
    }, 1500);
  }
}
