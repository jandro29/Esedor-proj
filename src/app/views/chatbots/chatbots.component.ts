import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

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
    AOS.init()
  }

}
