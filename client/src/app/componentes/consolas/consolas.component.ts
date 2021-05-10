import { Component, OnInit } from '@angular/core';
import { ConsolasService } from '../../servicios/consolas.service';
import { Console } from "../../models/Console";

@Component({
  selector: 'app-consolas',
  templateUrl: './consolas.component.html',
  styleUrls: ['./consolas.component.css']
})
export class ConsolasComponent implements OnInit {

  consolas: Console[];


  constructor(private consolasService: ConsolasService) { }

  ngOnInit() {
    this.consolasService.getConsoles().subscribe(
      res => {
        this.consolas = res
      },
      err => {
        console.log(err)
      }
    )
  }

}
