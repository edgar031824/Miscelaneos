import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-usuario-nuevo',
  template: `
  <p>
  usuario-nuevo works!
  </p>
  `,
  styles: []
})
export class UsuarioNuevoComponent implements OnInit {
  
  constructor(private routes:ActivatedRoute) { 
    this.routes.parent.params.subscribe((iobParams)=>{
      console.log(iobParams)
    });
  }
  
  ngOnInit() {
  }
  
}
