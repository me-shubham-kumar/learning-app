import { Directive,HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {

  constructor(private elementRef : ElementRef) { }

  // HostListener, it allow you to subscribe to event listener
  // @HostListener('focus') onFocus(){
  //   console.log("on Focus");
  // }

  @Input('appInputFormat') format:string;

  @HostListener('blur') onBlur(){
    let value:string = this.elementRef.nativeElement.value;
    if(this.format == "uppercase"){
      this.elementRef.nativeElement.value = value.toUpperCase();
    }else
      this.elementRef.nativeElement.value = value.toLowerCase();
    console.log("on Blur");
  }




}
