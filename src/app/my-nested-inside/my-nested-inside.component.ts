import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-nested-inside',
  templateUrl: './my-nested-inside.component.html',
  styleUrls: ['./my-nested-inside.component.css']
})
export class MyNestedInsideComponent implements OnInit {
  message: string = 'I am third generation component!';
  constructor() { }

  ngOnInit() {
  }

}
