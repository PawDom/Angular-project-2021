import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreGameComponent } from './core-game.component';

describe('CoreGameComponent', () => {
  let component: CoreGameComponent;
  let fixture: ComponentFixture<CoreGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoreGameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoreGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
