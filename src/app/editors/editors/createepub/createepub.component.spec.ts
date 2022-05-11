import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateepubComponent } from './createepub.component';

describe('CreateepubComponent', () => {
  let component: CreateepubComponent;
  let fixture: ComponentFixture<CreateepubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateepubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateepubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
