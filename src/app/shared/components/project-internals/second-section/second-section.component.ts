import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-second-section',
  templateUrl: './second-section.component.html',
  styleUrls: ['./second-section.component.css']
})
export class SecondSectionComponent implements OnInit {

  @Input() firstText!: string;
  @Input() secondText!: string;
  @Input() thirdText!: string;
  // @Input() fourthText!: string;
  @Input() displayContent!: any;
  @Input() displayImage!: any;
  @Input() imageSection!: any;
  // @Input() aosText!: any;
  // @Input() aosImage!: any;


  constructor() { }

  ngOnInit(): void {
  }

}
