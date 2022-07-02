import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranspoetAssetComponent } from './transpoet-asset.component';

describe('TranspoetAssetComponent', () => {
  let component: TranspoetAssetComponent;
  let fixture: ComponentFixture<TranspoetAssetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TranspoetAssetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TranspoetAssetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
