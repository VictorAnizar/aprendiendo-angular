import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Params } from '@angular/router';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {
  public nombre="";

  constructor(
    private _route:ActivatedRoute,
    private _router:Router
  ){ }

  ngOnInit() {
    this._route.params.subscribe((params: Params)=>{
      this.nombre=params.nombre; 
      console.log(this.nombre); 
    })
  }

}
