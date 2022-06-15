import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModalDemoComponent } from "../components/modal-demo/modal-demo.component";
import { CarouselDemoComponent } from "../components/carousel-demo/carousel-demo.component";

const routes: Routes = [
  {
    path: 'modal',
    component: ModalDemoComponent
  },
  {
    path: 'carousel',
   component: CarouselDemoComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
