import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-lets-talk',
  templateUrl: './lets-talk.component.html',
  styleUrls: ['./lets-talk.component.css']
})
export class LetsTalkComponent implements OnInit {

  btnStyle!: boolean;

  @Output() letsForm = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

}
