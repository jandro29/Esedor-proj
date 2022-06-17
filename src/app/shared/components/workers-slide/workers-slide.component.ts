import { Component, AfterViewInit, ViewChild, ChangeDetectorRef, ViewChildren  } from '@angular/core';
import { NguCarousel, NguCarouselConfig } from '@ngu/carousel';

@Component({
  selector: 'app-workers-slide',
  templateUrl: './workers-slide.component.html',
  styleUrls: ['./workers-slide.component.css']
})
export class WorkersSlideComponent implements AfterViewInit {

  @ViewChild('myCarousel') myCarousel!: NguCarousel<any>;

  carouselConfig: NguCarouselConfig = {
    grid: { xs: 1.2, sm: 1.2, md: 2, lg: 3, all: 0 },
    load: 3,
    slide: 1,
    interval: {timing: 5000, initialDelay: 1000},
    loop: false,
    touch: true,
    velocity: 0.2
  }

  ngAfterViewInit(): void {
    this.cdr.detectChanges();
  }

  constructor(private cdr: ChangeDetectorRef) { }

  items = [
    { title: 'Slide One', state: 'small' },
    { title: 'Slide Two', state: 'small' },
    { title: 'Slide Three', state: 'small' },
    { title: 'Slide Three', state: 'small' },
    { title: 'Slide Three', state: 'small' },
    { title: 'Slide Three', state: 'small' },
    { title: 'Slide Three', state: 'small' },
  ];

  // ngAfterViewInit(): void {
  // }

}
