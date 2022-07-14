import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentDetailsModelComponent } from './content-details-model.component';

describe('ContentDetailsModelComponent', () => {
  let component: ContentDetailsModelComponent;
  let fixture: ComponentFixture<ContentDetailsModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentDetailsModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentDetailsModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
