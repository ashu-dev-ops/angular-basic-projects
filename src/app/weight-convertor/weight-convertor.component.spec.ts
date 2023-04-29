import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeightConvertorComponent } from './weight-convertor.component';

describe('WeightConvertorComponent', () => {
  let component: WeightConvertorComponent;
  let fixture: ComponentFixture<WeightConvertorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeightConvertorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeightConvertorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
