import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CleanHomeComponent } from './clean-home.component';

describe('CleanHomeComponent', () => {
  let component: CleanHomeComponent;
  let fixture: ComponentFixture<CleanHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CleanHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CleanHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
