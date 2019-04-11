import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PataintComponent } from './pataint.component';

describe('PataintComponent', () => {
  let component: PataintComponent;
  let fixture: ComponentFixture<PataintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PataintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PataintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
