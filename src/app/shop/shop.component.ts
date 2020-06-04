import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-shop',
  template:`
    <h3>Shop Name</h3>
    {{shopName}}
  `,
  // templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  constructor() { }

  @Input() shopName:string;

  ngOnInit(): void {
  }

}
