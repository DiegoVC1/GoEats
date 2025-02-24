import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadcerComponent } from './headcer.component';

describe('HeadcerComponent', () => {
  let component: HeadcerComponent;
  let fixture: ComponentFixture<HeadcerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeadcerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeadcerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
