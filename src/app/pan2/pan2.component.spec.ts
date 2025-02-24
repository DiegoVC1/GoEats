import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pan2Component } from './pan2.component';

describe('Pan2Component', () => {
  let component: Pan2Component;
  let fixture: ComponentFixture<Pan2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pan2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pan2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
