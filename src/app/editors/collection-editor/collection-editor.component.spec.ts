import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CollectionEditorComponent } from './collection-editor.component';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
class RouterStub {
  navigate = jasmine.createSpy('navigate');
}

const mockActivatedRoute = {
  snapshot: {
      queryParams: {
          identifier: 'do_21247940906829414411032',
      }
  }
};

describe('CollectionEditorComponent', () => {
  let component: CollectionEditorComponent;
  let fixture: ComponentFixture<CollectionEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectionEditorComponent ],
      imports: [HttpClientModule],
      providers: [
        HttpClient,
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        { provide: Router, useClass: RouterStub }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#editorEventListener should navigate to "content-list" page', () => {
    const router = TestBed.inject(Router);
    component.editorEventListener({});
    expect(router.navigate).toHaveBeenCalledWith(['editors/content-list']);
  });

});
