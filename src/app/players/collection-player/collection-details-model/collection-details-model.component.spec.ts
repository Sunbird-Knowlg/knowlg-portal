import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CollectionDetailsModelComponent } from './collection-details-model.component';

describe('CollectionDetailsModelComponent', () => {
  let component: CollectionDetailsModelComponent;
  let fixture: ComponentFixture<CollectionDetailsModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatDialogModule],
      declarations: [ CollectionDetailsModelComponent ],
      providers: [
        {
          provide: MAT_DIALOG_DATA,
          useValue: {
            collectionData: { name: 'Test' }
          }
        }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionDetailsModelComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
