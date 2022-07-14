import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionDetailsModelComponent } from './collection-details-model.component';

describe('CollectionDetailsModelComponent', () => {
  let component: CollectionDetailsModelComponent;
  let fixture: ComponentFixture<CollectionDetailsModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectionDetailsModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionDetailsModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
