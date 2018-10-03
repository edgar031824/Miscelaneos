import { Component, OnInit } from '@angular/core';

/* <p [ngStyle]="{'font-size':nuSize+'px'}">  */
@Component({
  selector: 'app-ng-style',
  template: `
  <p [style.fontSize.px]="nuSize">
  Hola mundo soy una parráfo
  </p>
  <button type="button" class="btn btn-primary" (click)="nuSize=nuSize+5">
  <i class="fa fa-plus"></i>
  </button>
  <button type="button" class="btn btn-primary" (click)="nuSize=nuSize-5"> 
   <i class="fa fa-minus"></i>
   </button>
  `,
  styles: []
})
export class NgStyleComponent implements OnInit {
  nuSize:number=10;
  constructor() { }
  
  ngOnInit() {
  }
}

