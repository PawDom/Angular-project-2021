import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsRightComponent } from './buttons-right.component';

describe('ButtonsRightComponent', () => {
  let component: ButtonsRightComponent;
  let fixture: ComponentFixture<ButtonsRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonsRightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonsRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
