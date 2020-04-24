import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  contactMethods:Array<{id:number,name:string}> = [
    {id:1,name:'Phone'},
    {id:102,name:'Eamil'}
  ];

  whomToSend:Array<{id:number,name:string}> = [
    {id:101,name:'Radhye'},
    {id:102,name:'Shyam'},
    {id:108,name:"Krishna"}
  ];

  genders:Array<{id:number,value:string}> = [
    {id:1,value:'Male'},
    {id:2,value:'Female'},
    {id:6,value:'Other'}
  ];

  log(x){
    console.log(x);
  }
  submit(form){
    console.log(form);
  }

}
