import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CleanHamburgerComponent } from './clean-hamburger.component';

describe('CleanHamburgerComponent', () => {
  let component: CleanHamburgerComponent;
  let fixture: ComponentFixture<CleanHamburgerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CleanHamburgerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CleanHamburgerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
