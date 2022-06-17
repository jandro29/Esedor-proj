import { Component, OnInit } from '@angular/core';
import { MatSnackBarRef } from '@angular/material/snack-bar';
// import { MatSnackBarRef } from '@angular/material';

@Component({
  selector: 'app-cookies-bar',
  templateUrl: './cookies-bar.component.html',
  styleUrls: ['./cookies-bar.component.css']
})
export class CookiesBarComponent implements OnInit {

  constructor(public snackBarRef: MatSnackBarRef<CookiesBarComponent>) { }

  ngOnInit(): void {
  }

}
