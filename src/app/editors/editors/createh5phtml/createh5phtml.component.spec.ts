import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Createh5phtmlComponent } from './createh5phtml.component';

describe('Createh5phtmlComponent', () => {
  let component: Createh5phtmlComponent;
  let fixture: ComponentFixture<Createh5phtmlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Createh5phtmlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Createh5phtmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
