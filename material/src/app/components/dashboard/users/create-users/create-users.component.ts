import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-users',
  templateUrl: './create-users.component.html',
  styleUrls: ['./create-users.component.css']
})
export class CreateUsersComponent implements OnInit {
  sex: any	[]=['Masculino', 'Femenino']
  constructor() { }

  ngOnInit(): void {
  }

}
