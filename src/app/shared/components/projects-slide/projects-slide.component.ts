import { Component, AfterViewInit, ViewChild, ChangeDetectorRef, ViewChildren } from '@angular/core';
import { NguCarousel, NguCarouselConfig } from '@ngu/carousel';

@Component({
  selector: 'app-projects-slide',
  templateUrl: './projects-slide.component.html',
  styleUrls: ['./projects-slide.component.css']
})
export class ProjectsSlideComponent implements AfterViewInit {

  bgColor: boolean = true;
  bgColorTwo: boolean = true;
  bgColorThree: boolean = true;
  bgColorFourth: boolean = true;
  bgColorFifth: boolean = true;
  bgColorSixth: boolean = true;
  bgColorSeventh: boolean = true;
  bgColorEight: boolean = true;
  bgColorNine: boolean = true;
  bgColorTen: boolean = true;


  slideNo = 1;
  withAnim = true;
  resetAnim = true;

  @ViewChild('myCarousel') myCarousel!: NguCarousel<any>;

  @ViewChildren('linkRef') linkRefs: any;

  carouselConfig: NguCarouselConfig = {
    grid: { xs: 1.2, sm: 1.2, md: 2.2, lg: 3.2, all: 0 },
    load: 3,
    slide: 1,
    interval: {timing: 5000, initialDelay: 1000},
    loop: false,
    touch: true,
    velocity: 0.2
  }

  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterViewInit() {
    this.cdr.detectChanges();

  }

  // probandoClor() {
  //   this.bgColor = false
  // }

  // probandoClor2() {
  //   this.bgColor = true
  // }

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
