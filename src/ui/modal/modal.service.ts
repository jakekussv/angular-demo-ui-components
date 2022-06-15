import { Injectable, Output, EventEmitter } from '@angular/core';
@Injectable({ providedIn: 'root' })
export class ModalService {
  @Output() readonly closeModalEvent: EventEmitter<string> = new EventEmitter();
  @Output() readonly openModalEvent: EventEmitter<string> = new EventEmitter();
  @Output() readonly closeAllModalsEvent: EventEmitter<string> = new EventEmitter();

  openModal(modalId: string): void {
    this.openModalEvent.emit(modalId);
  }

  closeModal(modalId: string): void {
    this.closeModalEvent.emit(modalId);
  }

  closeAll(): void {
    this.closeAllModalsEvent.emit();
  }
}
