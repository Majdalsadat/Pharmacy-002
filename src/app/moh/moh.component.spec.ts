import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MOHComponent } from './moh.component';

describe('MOHComponent', () => {
  let component: MOHComponent;
  let fixture: ComponentFixture<MOHComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MOHComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MOHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
