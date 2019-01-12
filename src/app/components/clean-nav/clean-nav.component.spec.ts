import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CleanNavComponent } from './clean-nav.component';

describe('CleanNavComponent', () => {
  let component: CleanNavComponent;
  let fixture: ComponentFixture<CleanNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CleanNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CleanNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
