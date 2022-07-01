import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeDepentsComponent } from './employee-dependents.component';

describe('EmployeeDepentsComponent', () => {
    let component: EmployeeDepentsComponent;
    let fixture: ComponentFixture<EmployeeDepentsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [EmployeeDepentsComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(EmployeeDepentsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
