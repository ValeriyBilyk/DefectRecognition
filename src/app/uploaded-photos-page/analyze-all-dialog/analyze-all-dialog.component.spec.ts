import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyzeAllDialogComponent } from './analyze-all-dialog.component';

describe('AnalyzeAllDialogComponent', () => {
  let component: AnalyzeAllDialogComponent;
  let fixture: ComponentFixture<AnalyzeAllDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalyzeAllDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyzeAllDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
