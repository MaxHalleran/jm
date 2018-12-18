import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectShortListComponent } from './project-short-list.component';

describe('ProjectShortListComponent', () => {
  let component: ProjectShortListComponent;
  let fixture: ComponentFixture<ProjectShortListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectShortListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectShortListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
