import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chatbots',
  templateUrl: './chatbots.component.html',
  styleUrls: ['./chatbots.component.css']
})
export class ChatbotsComponent implements OnInit {



  btnStyle!: boolean;
  header_variable = false;
  constructor() { }

  ngOnInit(): void {
  }

}
