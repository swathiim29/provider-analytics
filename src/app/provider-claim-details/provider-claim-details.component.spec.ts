import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderClaimDetailsComponent } from './provider-claim-details.component';

describe('ProviderClaimDetailsComponent', () => {
  let component: ProviderClaimDetailsComponent;
  let fixture: ComponentFixture<ProviderClaimDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProviderClaimDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProviderClaimDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
