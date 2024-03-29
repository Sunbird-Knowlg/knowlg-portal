import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ContentDetailsModelComponent } from './content-details-model.component';

describe('ContentDetailsModelComponent', () => {
  let component: ContentDetailsModelComponent;
  let fixture: ComponentFixture<ContentDetailsModelComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [MatDialogModule],
      declarations: [ ContentDetailsModelComponent ],
      providers: [{ provide: MAT_DIALOG_DATA, useValue: {
        activeContent: {
          name: 'Test'
        }
        } }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentDetailsModelComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('#ngOnInit() should define viewPropertiesList data ', () => {
    component.ngOnInit();
    expect(component.viewPropertiesList).toBeDefined();
  });
});
