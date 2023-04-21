import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button-down',
  templateUrl: './button-down.component.html',
  styleUrls: ['./button-down.component.css']
})
export class ButtonDownComponent implements OnInit {

  @Output() getDown = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

}
