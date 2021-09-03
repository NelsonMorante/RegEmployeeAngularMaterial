import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/interfaces/usuario';


const listUsuarios: Usuario[] = [
  {usuario: "jperes", nombre: 'Juan', apellido: "Peres", sexo: 'M'},
  {usuario: "mpedro", nombre: 'pedro', apellido: "Peres", sexo: 'M'},
  {usuario: "smarcos", nombre: 'marcos', apellido: "Peres", sexo: 'M'},
  {usuario: "tever", nombre: 'ever', apellido: "Peres", sexo: 'M'},
  {usuario: "hcampos", nombre: 'luis', apellido: "Peres", sexo: 'M'},
  {usuario: "irosa", nombre: 'rosa', apellido: "Peres", sexo: 'M'},
  {usuario: "evap", nombre: 'eva', apellido: "Peres", sexo: 'M'}
]

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  displayedColumns: string[] = ['usuario', 'nombre', 'apellido', 'sexo', 'acciones'];
  dataSource = listUsuarios;
  constructor() { }

  ngOnInit(): void {
  }

}
