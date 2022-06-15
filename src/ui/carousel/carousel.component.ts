import {Component, ViewChild, OnInit} from '@angular/core';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  images: Array<string> = [];

  @ViewChild('carousel', {static : true}) carousel: NgbCarousel | undefined;

  constructor() { }

  ngOnInit(): void {
    this.images = [Math.random(),Math.random(),Math.random()].map(randomNumber => `https://picsum.photos/900/500?random&t=${randomNumber}`)
  }

  startCarousel(): void {
    this.carousel?.cycle();
  }

  pauseCarousel(): void {
    this.carousel?.pause();
  }

  moveNext(): void {
    this.carousel?.next();
  }

  getPrev(): void {
    this.carousel?.prev();
  }

  goToSlide(slide: string): void {
    this.carousel?.select(slide);
  }

}
