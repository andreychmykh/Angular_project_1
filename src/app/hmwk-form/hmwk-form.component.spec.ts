import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HmwkFormComponent } from './hmwk-form.component';

describe('HmwkFormComponent', () => {
  let component: HmwkFormComponent;
  let fixture: ComponentFixture<HmwkFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HmwkFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HmwkFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
