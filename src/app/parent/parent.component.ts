import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  template:`
    <h3>Parent</h3>
    <app-shop [shopName]="name"></app-shop>
  `,
  // templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor() { }

  name:string = "some shop";


  ngOnInit(): void {
  }

}
