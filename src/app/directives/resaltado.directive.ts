import { Directive,ElementRef,HostListener,Input, OnChanges} from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective implements OnChanges {
  
  constructor(private el:ElementRef) { 
  }
  @Input('appResaltado') nuevoColor:string;
  @HostListener('mouseenter')MouseEnter(){
    this.el.nativeElement.style.backgroundColor=this.nuevoColor;
  }
  @HostListener('mouseleave')MouseLeave(){
    this.el.nativeElement.style.backgroundColor=null;
  }
  ngOnChanges(){
    console.log("onChanges");
  }
}
