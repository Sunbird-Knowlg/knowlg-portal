import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateyoutubeComponent } from './createyoutube.component';

describe('CreateyoutubeComponent', () => {
  let component: CreateyoutubeComponent;
  let fixture: ComponentFixture<CreateyoutubeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateyoutubeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateyoutubeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
