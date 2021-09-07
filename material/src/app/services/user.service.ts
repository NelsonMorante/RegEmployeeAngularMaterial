import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  listUsuarios: Usuario[] = [
    {usuario: "jperes", nombre: 'Juan', apellido: "Peres", sexo: 'M'},
    {usuario: "mpedro", nombre: 'pedro', apellido: "Peres", sexo: 'M'},
    {usuario: "smarcos", nombre: 'marcos', apellido: "Peres", sexo: 'M'},
    {usuario: "tever", nombre: 'ever', apellido: "Peres", sexo: 'M'},
    {usuario: "hcampos", nombre: 'luis', apellido: "Peres", sexo: 'M'},
    {usuario: "irosa", nombre: 'rosa', apellido: "Peres", sexo: 'M'},
    {usuario: "evap", nombre: 'eva', apellido: "Peres", sexo: 'M'}
  ]
  constructor() { }

  getUser(){
    return this.listUsuarios.slice();
  }

  deleteUser(index: number){
    return this.listUsuarios.splice(index, 1);
  }
}
