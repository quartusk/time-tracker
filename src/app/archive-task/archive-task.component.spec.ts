import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiveTaskComponent } from './archive-task.component';

describe('ArchiveTaskComponent', () => {
  let component: ArchiveTaskComponent;
  let fixture: ComponentFixture<ArchiveTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchiveTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchiveTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
