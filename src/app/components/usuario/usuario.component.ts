import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styles: []
})
export class UsuarioComponent implements OnInit {
  
  constructor(private routes:ActivatedRoute) { 
    this.routes.params.subscribe((ioParams)=>{
      
    });
  }
  ngOnInit() {
  }
  
}
