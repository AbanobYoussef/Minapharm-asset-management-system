import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppEditModalComponent } from './app-edit-modal.component';

describe('AppEditModalComponent', () => {
  let component: AppEditModalComponent;
  let fixture: ComponentFixture<AppEditModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppEditModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppEditModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
