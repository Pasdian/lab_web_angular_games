import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ConsolasService } from "../../servicios/consolas.service";
import { Console } from "../../models/Console";

@Component({
  selector: 'app-infoconsola',
  templateUrl: './infoconsola.component.html',
  styleUrls: ['./infoconsola.component.css']
})
export class InfoconsolaComponent implements OnInit {

  consola:Console;

  constructor(private activatedRoute: ActivatedRoute, private consolasService:ConsolasService) {

  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params =>{
      this.consolasService.getConsole(params['id']).subscribe(
        res => {
          this.consola = res
        },
        err => console.log(err)
      );
    })
  }

}
