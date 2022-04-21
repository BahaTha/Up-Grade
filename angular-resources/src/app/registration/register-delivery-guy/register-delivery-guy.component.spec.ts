import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterDeliveryGuyComponent } from './register-delivery-guy.component';

describe('RegisterDeliveryGuyComponent', () => {
  let component: RegisterDeliveryGuyComponent;
  let fixture: ComponentFixture<RegisterDeliveryGuyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterDeliveryGuyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterDeliveryGuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
