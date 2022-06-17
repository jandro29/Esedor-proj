import { Output } from '@angular/core';
import { Input } from '@angular/core';
import { Component, AfterViewInit, ViewChild, ChangeDetectorRef, ViewChildren, EventEmitter } from '@angular/core';
import { NguCarousel, NguCarouselConfig } from '@ngu/carousel';

@Component({
  selector: 'app-main-slider',
  templateUrl: './main-slider.component.html',
  styleUrls: ['./main-slider.component.css']
})
export class MainSliderComponent implements AfterViewInit {

  slideNo = 1;
  withAnim = true;
  resetAnim = true; 

  btnStyle!: boolean;

  @Output() getDown = new EventEmitter<any>();

  @ViewChild('myCarousel') myCarousel!: NguCarousel<any>;
  @ViewChildren('linkRef') linkRefs: any;

  carouselConfig: NguCarouselConfig = {
    grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
    load: 3,
    slide: 1,
    interval: {timing: 5000, initialDelay: 1000},
    loop: false,
    touch: true,
    velocity: 0.2
  }

  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    this.cdr.detectChanges();
  }

  reset() {
    this.myCarousel.reset(!this.resetAnim);
  }

  moveTo(slide: any) {
    this.myCarousel.moveTo(slide, !this.withAnim);
  }

  items = [
    { title: 'Slide One', state: 'small' },
    { title: 'Slide Two', state: 'small' },
    { title: 'Slide Three', state: 'small' },
    { title: 'Slide Three', state: 'small' },
    { title: 'Slide Three', state: 'small' },
    { title: 'Slide Three', state: 'small' },
    { title: 'Slide Three', state: 'small' },
  ];

}
