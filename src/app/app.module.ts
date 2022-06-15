import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbCarouselModule } from "@ng-bootstrap/ng-bootstrap";
import { CarouselDemoComponent } from '../components/carousel-demo/carousel-demo.component';
import { ModalDemoComponent } from "../components/modal-demo/modal-demo.component";
import { CarouselComponent } from "../ui/carousel/carousel.component";
import { ModalComponent } from "../ui/modal/modal.component";
import  { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    CarouselDemoComponent,
    ModalDemoComponent,
    CarouselComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgbCarouselModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
