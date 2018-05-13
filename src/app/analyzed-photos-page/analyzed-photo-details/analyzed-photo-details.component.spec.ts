import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyzedPhotoDetailsComponent } from './analyzed-photo-details.component';

describe('AnalyzedPhotoDetailsComponent', () => {
  let component: AnalyzedPhotoDetailsComponent;
  let fixture: ComponentFixture<AnalyzedPhotoDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalyzedPhotoDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyzedPhotoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
