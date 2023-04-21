import { Component, HostListener, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-levelup',
  templateUrl: './levelup.component.html',
  styleUrls: ['./levelup.component.css']
})
export class LevelupComponent implements OnInit {
  navbarfixed:boolean = false;
  btnStyle!: boolean;
  showForm!: boolean;


  showFormEvent() {
    this.showForm = true;
  }

  closeFormEvent() {
    this.showForm = false;
  }

  getDownSection() {
    let x = document.querySelector("#nextContent");
    if (x){
        x.scrollIntoView({behavior: "smooth"});
    }
  }





  @ViewChild('.mat-tab-header') headerTab: any;

  @HostListener('window:scroll',['$event']) onscroll(){
    if(window.scrollY > 1370)
    {
      this.headerTab = '.fixed';
    }
    else
    {
      this.headerTab = '.nofixed';
    }
  }

  bgTab: boolean = true;
  bgTab2!: boolean;
  colorWhite = true;


test(a: any){
  if(a.index == 0) {
    this.bgTab = true;
    this.bgTab2 = false;

  } else if (a.index == 1 ) {
    this.bgTab2 = true;
    this.bgTab = false;
  }
  console.log(a.index)
}

  constructor() { }

  ngOnInit(): void {
  }

}
