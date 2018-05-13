import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyzeDialogComponent } from './analyze-dialog.component';

describe('AnalyzeDialogComponent', () => {
  let component: AnalyzeDialogComponent;
  let fixture: ComponentFixture<AnalyzeDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalyzeDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyzeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
