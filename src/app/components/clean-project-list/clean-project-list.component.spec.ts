import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CleanProjectListComponent } from './clean-project-list.component';

describe('CleanProjectListComponent', () => {
  let component: CleanProjectListComponent;
  let fixture: ComponentFixture<CleanProjectListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CleanProjectListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CleanProjectListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
