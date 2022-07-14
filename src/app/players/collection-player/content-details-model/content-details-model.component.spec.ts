import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentDetailsModelComponent } from './content-details-model.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
describe('ContentDetailsModelComponent', () => {
  let component: ContentDetailsModelComponent;
  let fixture: ComponentFixture<ContentDetailsModelComponent>;
  class RouterStub {
    navigate = jasmine.createSpy('navigate');
  }
  const activeContent = {
    name: 'content',
    description: 'content description',
    license: 'abc',
    compatibilityLevel: 'true'
  };
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ContentDetailsModelComponent],
      imports: [HttpClientModule, MatDialogModule],
      providers: [
        { provide: Router, useClass: RouterStub },
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: { activeContent } },
        HttpClient,
      ]
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
