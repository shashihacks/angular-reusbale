import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressBarContainerComponent } from './progress-bar-container.component';

describe('ProgressBarContainerComponent', () => {
  let component: ProgressBarContainerComponent;
  let fixture: ComponentFixture<ProgressBarContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgressBarContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressBarContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
