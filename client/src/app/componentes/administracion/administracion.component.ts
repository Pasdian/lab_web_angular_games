import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-administracion',
  templateUrl: './administracion.component.html',
  styleUrls: ['./administracion.component.css']
})
export class AdministracionComponent implements OnInit {

  is_editing_console = true;

  constructor() { }

  ngOnInit(): void {
  }

  toggle_edit_status() {
    this.is_editing_console = !this.is_editing_console;
  }

}
