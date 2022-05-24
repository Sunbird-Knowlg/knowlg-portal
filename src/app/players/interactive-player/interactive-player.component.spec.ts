import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InteractivePlayerComponent } from './interactive-player.component';

describe('InteractivePlayerComponent', () => {
  let component: InteractivePlayerComponent;
  let fixture: ComponentFixture<InteractivePlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InteractivePlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InteractivePlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
