import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pan3Component } from './pan3.component';

describe('Pan3Component', () => {
  let component: Pan3Component;
  let fixture: ComponentFixture<Pan3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pan3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pan3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
