import {Component, Input} from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {FormControl, FormGroup} from '@angular/forms';
import {PhotoService} from '../../services/photo.service';

@Component({
  selector: 'app-create-dialog',
  templateUrl: './create-dialog.component.html',
  styleUrls: ['./create-dialog.component.scss']
})
export class CreateDialogComponent {

  @Input() model: any;

  public form = new FormGroup ({
    name: new FormControl(),
    company: new FormControl()
  });
  public file: File;

  constructor(public activeModal: NgbActiveModal, private photoService: PhotoService) {}

  public onSubmit() {
    const formData = new FormData();
    formData.append('name', this.form.get('name').value);
    formData.append('source', this.file);
    formData.append('user_id', 2);
    formData.append('company_id', 2);

    this.photoService.postPhoto(formData).subscribe(res => this.activeModal.close('Close click'));
  }

  public handleFileSelection(file: File) {
    this.file = file;
  }
}
