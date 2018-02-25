import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyzedPhotosPageComponent } from './analyzed-photos-page.component';

describe('AnalyzedPhotosPageComponent', () => {
  let component: AnalyzedPhotosPageComponent;
  let fixture: ComponentFixture<AnalyzedPhotosPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalyzedPhotosPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyzedPhotosPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
