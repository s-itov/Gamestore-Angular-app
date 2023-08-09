import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IModalDelete } from 'src/app/models/IModalDelete';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  @Input() isDeleteModalShowing!: boolean;
  @Output() deleteModalChanged = new EventEmitter<IModalDelete>();


  onCloseModalHandler() {
    this.deleteModalChanged.emit({
      isDeleteModalShowing: !this.isDeleteModalShowing,
      isDeleteRequested: false,
    });
  }

  onDeleteModalHandler() {
    this.deleteModalChanged.emit({
      isDeleteModalShowing: !this.isDeleteModalShowing,
      isDeleteRequested: true,
    });
  }

}
