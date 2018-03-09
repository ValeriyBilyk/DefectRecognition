import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPhotoComponent } from './list-photo/list-photo.component';
import { ListPhotoItemComponent } from './list-photo-item/list-photo-item.component';
import { ListAdjustmentComponent } from './list-adjustment/list-adjustment.component';
import { ModalService } from './modal.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    NgbModule
  ],
  declarations: [
    ListPhotoComponent,
    ListPhotoItemComponent,
    ListAdjustmentComponent
  ],
  exports: [
    ListPhotoComponent,
    ListPhotoItemComponent,
    ListAdjustmentComponent
  ],
  providers: [
    ModalService
  ]
})
export class SharedModule { }
