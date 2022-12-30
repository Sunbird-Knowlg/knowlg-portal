import { ComponentFixture, TestBed } from '@angular/core/testing';

import { V1PlayerComponent } from './v1-player.component';

describe('V1PlayerComponent', () => {
  let component: V1PlayerComponent;
  let fixture: ComponentFixture<V1PlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ V1PlayerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(V1PlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
