import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitDisplayComponent } from './init-display.component';

describe('InitDisplayComponent', () => {
  let component: InitDisplayComponent;
  let fixture: ComponentFixture<InitDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InitDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InitDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
