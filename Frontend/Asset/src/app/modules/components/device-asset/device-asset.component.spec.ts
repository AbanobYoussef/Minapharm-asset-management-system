import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceAssetComponent } from './device-asset.component';

describe('DeviceAssetComponent', () => {
  let component: DeviceAssetComponent;
  let fixture: ComponentFixture<DeviceAssetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeviceAssetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceAssetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
