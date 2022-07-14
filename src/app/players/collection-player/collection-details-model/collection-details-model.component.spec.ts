import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionDetailsModelComponent } from './collection-details-model.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
describe('CollectionDetailsModelComponent', () => {
  let component: CollectionDetailsModelComponent;
  let fixture: ComponentFixture<CollectionDetailsModelComponent>;
  class RouterStub {
    navigate = jasmine.createSpy('navigate');
  }
  const collectionData = {
    name: 'content',
    description: 'content description',
    license: 'abc',
    compatibilityLevel: 'true'
  };
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CollectionDetailsModelComponent],
      imports: [HttpClientModule, MatDialogModule],
      providers: [
        { provide: Router, useClass: RouterStub },
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: { collectionData } },
        HttpClient,
      ]
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
