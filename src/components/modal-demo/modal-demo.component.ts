import { Component } from '@angular/core';
import { ModalService } from "../../ui/modal/modal.service";

@Component({
  selector: 'modal-demo',
  templateUrl: './modal-demo.component.html',
})

export class ModalDemoComponent {
  constructor(private readonly modalService: ModalService) {}

  showModal(): void {
    this.modalService.openModal('demoModal');
  }
}
