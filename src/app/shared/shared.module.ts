import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPhotoComponent } from './list-photo/list-photo.component';
import { ListPhotoItemComponent } from './list-photo-item/list-photo-item.component';
import { ListAdjustmentComponent } from './list-adjustment/list-adjustment.component';
import { ModalService } from './modal.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InputFileComponent } from './input-file/input-file.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule
  ],
  declarations: [
    ListPhotoComponent,
    ListPhotoItemComponent,
    ListAdjustmentComponent,
    InputFileComponent
  ],
  exports: [
    ListPhotoComponent,
    ListPhotoItemComponent,
    ListAdjustmentComponent,
    InputFileComponent
  ],
  providers: [
    ModalService
  ]
})
export class SharedModule { }
