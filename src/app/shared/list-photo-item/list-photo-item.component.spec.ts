import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPhotoItemComponent } from './list-photo-item.component';

describe('ListPhotoItemComponent', () => {
  let component: ListPhotoItemComponent;
  let fixture: ComponentFixture<ListPhotoItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPhotoItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPhotoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
