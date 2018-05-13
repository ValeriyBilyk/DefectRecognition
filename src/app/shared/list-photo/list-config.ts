export class ListConfig {

  static UPLOADED_PHOTO: UPLOADED_PHOTO = 'UPLOADED_PHOTO';
  static ANALYZED_PHOTO: ANALYZED_PHOTO = 'ANALYZED_PHOTO';

  modelType: UPLOADED_PHOTO | ANALYZED_PHOTO;
  create: boolean;
  edit: boolean;
  deleting: boolean;
  searching: boolean;
  analyze: boolean;

  constructor(modelType: UPLOADED_PHOTO | ANALYZED_PHOTO, create: boolean, edit: boolean, deleting: boolean, searching: boolean, analyze: boolean) {
    Object.assign(this, {modelType, create, edit, deleting, searching, analyze});
  }
}

export type UPLOADED_PHOTO = 'UPLOADED_PHOTO';
export type ANALYZED_PHOTO = 'ANALYZED_PHOTO';
