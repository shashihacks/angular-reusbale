import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableStateComponent } from './table-state.component';

describe('TableStateComponent', () => {
  let component: TableStateComponent;
  let fixture: ComponentFixture<TableStateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableStateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
