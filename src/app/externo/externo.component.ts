import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../services/peticiones.service';

@Component({
  selector: 'app-externo',
  templateUrl: './externo.component.html',
  styleUrls: ['./externo.component.css'], 
  providers: [PeticionesService]
})
export class ExternoComponent implements OnInit {
  public user: any;
  public users: any;
  public statusColor=false;
  constructor(
    private _peticionesService: PeticionesService,
  ) {}

  ngOnInit(): void {
    this._peticionesService.getUser().subscribe(
      result =>{
        console.log(result);
        this.user=((result.data));
      },
      error =>{
        console.log(<any>error);
      }
    );
    this._peticionesService.getUsers().subscribe(
      result =>{
        console.log(result.data);
        this.users=((result.data));
      },
      error =>{
        console.log(<any>error);
      }
    );
  }
  cambiaColor(){
    this.statusColor=!this.statusColor;
  }
  

}
