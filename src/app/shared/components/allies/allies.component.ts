import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-allies',
  templateUrl: './allies.component.html',
  styleUrls: ['./allies.component.css']
})
export class AlliesComponent implements OnInit {

  @Input() displayElement!: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
