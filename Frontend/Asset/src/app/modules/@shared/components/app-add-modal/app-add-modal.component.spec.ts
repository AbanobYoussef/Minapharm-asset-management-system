import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppAddModalComponent } from './app-add-modal.component';

describe('AppAddModalComponent', () => {
  let component: AppAddModalComponent;
  let fixture: ComponentFixture<AppAddModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppAddModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppAddModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
