import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styles: []
})
export class ClasesComponent implements OnInit {
  
  constructor() { }
  alerta:string="alert-danger";
  propiedades:object={
    danger:true
  };
  loading:boolean;
  ngOnInit() {
  }
  ejecutar(){
    this.loading=true;
    setTimeout(() => {
      this.loading=false;
    }, 3000);
  }
}
