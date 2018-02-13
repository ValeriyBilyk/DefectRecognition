import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadedPhotosPageComponent } from './uploaded-photos-page.component';

describe('UploadedPhotosPageComponent', () => {
  let component: UploadedPhotosPageComponent;
  let fixture: ComponentFixture<UploadedPhotosPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadedPhotosPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadedPhotosPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
