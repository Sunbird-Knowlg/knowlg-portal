import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionPlayerComponent } from './collection-player.component';

describe('CollectionPlayerComponent', () => {
  let component: CollectionPlayerComponent;
  let fixture: ComponentFixture<CollectionPlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectionPlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
