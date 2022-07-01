import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotpermitedComponent } from './notpermited.component';

describe('NotpermitedComponent', () => {
  let component: NotpermitedComponent;
  let fixture: ComponentFixture<NotpermitedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotpermitedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotpermitedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
