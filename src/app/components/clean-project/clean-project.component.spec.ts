import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CleanProjectComponent } from './clean-project.component';

describe('CleanProjectComponent', () => {
  let component: CleanProjectComponent;
  let fixture: ComponentFixture<CleanProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CleanProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CleanProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
