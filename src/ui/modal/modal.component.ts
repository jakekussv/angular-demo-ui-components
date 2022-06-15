import {
  Component, Input, Output, EventEmitter, OnInit, OnDestroy, ElementRef, Inject, TemplateRef, ContentChild, Renderer2
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { trigger, style, animate, transition } from '@angular/animations';
import { Subscription } from 'rxjs';
import { ModalService } from "./modal.service";

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  animations: [
    trigger('dialog', [
      transition('void => *', [
        style({ transform: 'scale3d(.3, .3, .3)' }),
        animate(100)
      ]),
      transition('* => void', [
        animate(100, style({ transform: 'scale3d(.0, .0, .0)' }))
      ])
    ])
  ]
})

export class ModalComponent implements OnInit, OnDestroy {
  @ContentChild('modalBody') modalBodyTemplate: TemplateRef<any> | null = null;
  @Input() modalId = '';
  @Input() title = '';
  @Input() visible = false;
  @Output() readonly modalClosed: EventEmitter<any> = new EventEmitter<any>();
  private readonly subscriptions = new Subscription();

  constructor(
    @Inject(DOCUMENT) private readonly document: Document,
    private readonly modalService: ModalService,
    private readonly element: ElementRef<HTMLElement>,
    private readonly renderer: Renderer2) {}

  ngOnInit(): void {
    // move element to bottom of page (just before </body>) so it can be displayed above everything else
    // This is for the case where we nest a modal component inside of a position relative / absolute container
    // Angular will remove it if we navigate away by refresh or browser button
    this.document.body.appendChild(this.element.nativeElement);

    // Since the z-index of our modal is higher than the overlay, clicking the overlay will not fire any events
    // We need to listen for the click event on the modal itself and if it is anything except the modal content, assume
    // it is outside and close the modal. Bootstrap does something similar.
    this.element.nativeElement.addEventListener('click', el => {
      const elementTarget = el.target as Element;
      if (elementTarget.className === 'modal') {
        this.visible = false;
      }
    });

    this.subscriptions.add(this.modalService.closeModalEvent
      .subscribe((modalId: string) => {
        if (this.modalId === modalId) {
          // Show scrollbar again on the body
          this.visible = false;
        }
      }));

    this.subscriptions.add(this.modalService.openModalEvent
      .subscribe((modalId: string)=> {
        if (this.modalId === modalId) {
          this.visible = true;
        }
      }));

    this.subscriptions.add(this.modalService.closeAllModalsEvent
      .subscribe(() => {
        this.visible = false;
      }));
  }

  // In the case where we do a state change via code
  ngOnDestroy(): void {
    this.document.body.removeChild(this.element.nativeElement);
    this.renderer.removeClass(this.document.body, 'modal');
    this.subscriptions.unsubscribe();
  }

  close(): void {
    this.visible = false;
    this.renderer.removeClass(this.document.body, 'modal');
    this.modalClosed.emit();
  }
}
