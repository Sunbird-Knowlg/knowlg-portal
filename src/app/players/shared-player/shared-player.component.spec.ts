import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedPlayerComponent } from './shared-player.component';

describe('SharedPlayerComponent', () => {
  let component: SharedPlayerComponent;
  let fixture: ComponentFixture<SharedPlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharedPlayerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
