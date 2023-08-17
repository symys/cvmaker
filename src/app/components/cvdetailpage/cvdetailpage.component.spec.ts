import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvdetailpageComponent } from './cvdetailpage.component';

describe('CvdetailpageComponent', () => {
  let component: CvdetailpageComponent;
  let fixture: ComponentFixture<CvdetailpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CvdetailpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CvdetailpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
