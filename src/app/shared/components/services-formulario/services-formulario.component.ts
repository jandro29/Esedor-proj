import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-services-formulario',
  templateUrl: './services-formulario.component.html',
  styleUrls: ['./services-formulario.component.css']
})
export class ServicesFormularioComponent implements OnInit {

  btnStyle!: boolean;
  btnStyle2!: boolean;

  @Output() letsForm = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

}
