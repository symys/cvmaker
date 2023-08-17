import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatecvpageComponent } from './createcvpage.component';

describe('CreatecvpageComponent', () => {
  let component: CreatecvpageComponent;
  let fixture: ComponentFixture<CreatecvpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatecvpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatecvpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
