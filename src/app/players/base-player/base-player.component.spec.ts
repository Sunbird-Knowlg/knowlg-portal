import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasePlayerComponent } from './base-player.component';

describe('BasePlayerComponent', () => {
  let component: BasePlayerComponent;
  let fixture: ComponentFixture<BasePlayerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BasePlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasePlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
