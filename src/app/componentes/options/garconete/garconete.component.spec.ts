import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GarconeteComponent } from './garconete.component';

describe('GarconeteComponent', () => {
  let component: GarconeteComponent;
  let fixture: ComponentFixture<GarconeteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GarconeteComponent]
    });
    fixture = TestBed.createComponent(GarconeteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
