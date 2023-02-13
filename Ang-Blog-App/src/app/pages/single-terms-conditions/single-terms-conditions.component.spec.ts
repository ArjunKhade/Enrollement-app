import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleTermsConditionsComponent } from './single-terms-conditions.component';

describe('SingleTermsConditionsComponent', () => {
  let component: SingleTermsConditionsComponent;
  let fixture: ComponentFixture<SingleTermsConditionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleTermsConditionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleTermsConditionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
