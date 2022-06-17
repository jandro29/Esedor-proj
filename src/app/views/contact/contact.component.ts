import { Component, OnInit } from '@angular/core';

import * as AOS from 'aos';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  colorWhite = true;
  btnStyle!: boolean;
  showForm!: boolean;

  constructor() { }

  showFormEvent() {
    this.showForm = true;
  }

  closeFormEvent() {
    this.showForm = false;
  }

  ngOnInit(): void {

    AOS.init()
  }

}
