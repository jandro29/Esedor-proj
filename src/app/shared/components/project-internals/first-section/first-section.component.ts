import { Component, OnInit, Input,EventEmitter,Output } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-first-section',
  templateUrl: './first-section.component.html',
  styleUrls: ['./first-section.component.css']
})
export class FirstSectionComponent implements OnInit {

  @Output() letsForm = new EventEmitter<any>();

  btnStyle!: boolean;
  @Input() date!: number;
  @Input() industry!: string;
  @Input() client!: string;
  @Input() image!: string;
  @Input() paragraphOne!: string;
  @Input() paragraphTwo!: string;
  @Input() imgstyle!:string
  @Input() styles!: string;
  @Input() display!: string;
  @Input() display2!: string;
  @Input() imageTwo!: string;
  @Input() optionImg!: string;
  @Input() date2!: string;
  @Input() date3!: string;
  @Input() industry2!:string;
  @Input() industry3!:string;
  @Input() hiddenhead!:string;
  @Input() serviceList!: Array<String>;
  @Input() definitionsList!: Array<String>;
  @Input() animatedTitle!: Array<{aos: number, label:String}>;
  @Input() arrowhidden!:string

  item!: number
  constructor() { }

  ngOnInit(): void {
    AOS.init()
  }

}
