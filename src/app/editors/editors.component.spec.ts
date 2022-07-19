import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalStorageService } from '../services/user/localstorage.service';
import { EditorsComponent } from './editors.component';

const mockActivatedRoute = {
  snapshot: {
    queryParams: {
      identifier: 'do_21247940906829414411032',
      collectionId: 'do_1234'
    }
  }
};

class RouterStub {
  navigate = jasmine.createSpy('navigate');
}

describe('EditorsComponent', () => {
  let component: EditorsComponent;
  let fixture: ComponentFixture<EditorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditorsComponent ],
      providers: [{ provide: Router, useClass: RouterStub }, LocalStorageService,
        { provide: ActivatedRoute, useValue: mockActivatedRoute }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#navigateToContentList should navigate to "collection-editor" ', () => {
    const router = TestBed.inject(Router);
    component.navigateToContentList('collection-editor');
    expect(router.navigate).toHaveBeenCalledWith(['editors/content-list']);
  });

});
