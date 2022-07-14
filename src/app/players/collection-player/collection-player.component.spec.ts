import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionPlayerComponent } from './collection-player.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
describe('CollectionPlayerComponent', () => {
  let component: CollectionPlayerComponent;
  let fixture: ComponentFixture<CollectionPlayerComponent>;
  class RouterStub {
    navigate = jasmine.createSpy('navigate');
  }
  const mockActivatedRoute = {
    snapshot: {
      queryParams: {
        collectionId: 'do_21247940906829414411032',
      }
    }
  };
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatDialogModule, HttpClientModule],
      declarations: [CollectionPlayerComponent],
      providers: [MatDialog, HttpClient,
        { provide: Router, useClass: RouterStub },
        { provide: MatDialogRef, useValue: {} },
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
      ],
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
