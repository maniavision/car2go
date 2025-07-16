import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestCarComponent } from './request-car.component';

describe('RequestCarComponent', () => {
  let component: RequestCarComponent;
  let fixture: ComponentFixture<RequestCarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RequestCarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RequestCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
