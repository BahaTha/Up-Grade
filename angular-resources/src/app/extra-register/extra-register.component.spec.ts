import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtraRegisterComponent } from './extra-register.component';

describe('ExtraRegisterComponent', () => {
  let component: ExtraRegisterComponent;
  let fixture: ComponentFixture<ExtraRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtraRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtraRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});