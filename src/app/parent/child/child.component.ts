import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  template:`
    <h3>Child</h3>
    {{inpData}}
  `,
  // templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

  @Input() inpData:any = "Priyanka";

  ngOnInit(): void {
  }

}
