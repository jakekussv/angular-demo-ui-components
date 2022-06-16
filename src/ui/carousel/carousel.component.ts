import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'random-image-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class RandomImageCarouselComponent implements OnInit {
  images: Array<string> = [];

  constructor() { }

  ngOnInit(): void {
    this.generateInitialImages();
    setInterval(()=> {
     this.addImage();
    }, 5000)
  }

  private generateInitialImages(): void {
    this.images = [Math.random(),Math.random(),Math.random()].map(
      randomNumber => `https://picsum.photos/900/500?random&t=${randomNumber}`)
  }

  private addImage(): void {
    this.images.push(`https://picsum.photos/900/500?random&t=${Math.random()}`)
  }
}
