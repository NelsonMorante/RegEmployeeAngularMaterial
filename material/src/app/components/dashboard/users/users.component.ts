import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Usuario } from 'src/app/interfaces/usuario';




@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  listUsuarios: Usuario[] = [
    {usuario: "jperes", nombre: 'Juan', apellido: "Peres", sexo: 'M'},
    {usuario: "mpedro", nombre: 'pedro', apellido: "Peres", sexo: 'M'},
    {usuario: "smarcos", nombre: 'marcos', apellido: "Peres", sexo: 'M'},
    {usuario: "tever", nombre: 'ever', apellido: "Peres", sexo: 'M'},
    {usuario: "hcampos", nombre: 'luis', apellido: "Peres", sexo: 'M'},
    {usuario: "irosa", nombre: 'rosa', apellido: "Peres", sexo: 'M'},
    {usuario: "evap", nombre: 'eva', apellido: "Peres", sexo: 'M'}
  ]

  displayedColumns: string[] = ['usuario', 'nombre', 'apellido', 'sexo', 'acciones'];
  dataSource = new MatTableDataSource(this.listUsuarios);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
