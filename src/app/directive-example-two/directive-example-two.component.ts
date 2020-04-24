import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'directive-example-two',
  templateUrl: './directive-example-two.component.html',
  styleUrls: ['./directive-example-two.component.css']
})
export class DirectiveExampleTwoComponent implements OnInit {

  viewMode = 'something';

  constructor() { }

  ngOnInit(): void {
  }

}
