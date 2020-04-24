import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'directive-example-one',
  templateUrl: './directive-example-one.component.html',
  styleUrls: ['./directive-example-one.component.css']
})
export class DirectiveExampleOneComponent implements OnInit {

  items = ['apple','orange'];
  constructor() { }

  ngOnInit(): void {
  }

}
