import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimRejectionDetailsComponent } from './claim-rejection-details.component';

describe('ClaimRejectionDetailsComponent', () => {
  let component: ClaimRejectionDetailsComponent;
  let fixture: ComponentFixture<ClaimRejectionDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClaimRejectionDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaimRejectionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
