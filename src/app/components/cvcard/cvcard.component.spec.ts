import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvcardComponent } from './cvcard.component';

describe('CvcardComponent', () => {
  let component: CvcardComponent;
  let fixture: ComponentFixture<CvcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CvcardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CvcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
