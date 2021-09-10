import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuario';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-create-users',
  templateUrl: './create-users.component.html',
  styleUrls: ['./create-users.component.css']
})
export class CreateUsersComponent implements OnInit {
  sex: any	[]=['Masculino', 'Femenino']
  form: FormGroup;
  constructor(private fb: FormBuilder, 
    private _userService: UserService,
    private router: Router,
    private _snackBar: MatSnackBar) { 
    this.form = this.fb.group({
      user: ['', Validators.required],
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      sex: ['', Validators.required],
    })
  }

  ngOnInit(): void {
  }

  addUser(){
    const user: Usuario = {
      usuario: this.form.value.user,
      nombre: this.form.value.name,
      apellido: this.form.value.lastName,
      sexo: this.form.value.sex,
    }
    this._userService.addUser(user)
    this.router.navigate(['/dashboard/usuarios'])

    this._snackBar.open('El usuario fue agregado exitozamente','', {
      duration: 1500,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })
  }

}
