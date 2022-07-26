import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CollectionEditorComponent } from './collection-editor.component';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { mockData } from './collection-editor.component.data';
class RouterStub {
  navigate = jasmine.createSpy('navigate');
}

const mockActivatedRoute = {
  snapshot: {
    queryParams: {
      identifier: 'do_21358476305801216017',
    }
  }
};

describe('CollectionEditorComponent', () => {
  let component: CollectionEditorComponent;
  let fixture: ComponentFixture<CollectionEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CollectionEditorComponent],
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
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#editorEventListener should navigate to "content-list" page', () => {
    const router = TestBed.inject(Router);
    component.editorEventListener({});
    expect(router.navigate).toHaveBeenCalledWith(['editors/content-list']);
  });
  it('#editorEventListener() should call  and navigate to content list', () => {
    const router = TestBed.inject(Router);
    component.editorEventListener({});
    expect(router.navigate).toHaveBeenCalledWith(['editors/content-list']);
  });
  it('#ngOnInit should call and get user data and content identifier from queryParams', () => {
    spyOn(component, 'initialize').and.callFake(() => of(true));
    component.ngOnInit();
    expect(component.initialize).toHaveBeenCalled();
    expect(component.userData).toBeDefined();
    expect(component.queryParams.identifier).toBeDefined();
  });
  it('#getEditorMode should call and get content status for review case', () => {
    component.content = { status: 'review' };
    const contentStatus = component.getEditorMode();
    expect(contentStatus).toBe('review');
  });
  it('#setHierarchyConfig should call and set editor config details', () => {
    spyOn(component, 'setEditorConfig').and.callThrough();
    spyOn(component, 'getPrimaryCategoryData').and.callThrough();
    component.setHierarchyConfig(mockData.objectMetadata);
    expect(component.setEditorConfig).toHaveBeenCalled();
    expect(component.editorConfig).toBeDefined();
  });
  it('#getFrameWorkDetails should call and get CategoryDefinition details for success api response', () => {
    component.content = { primaryCategory: 'abc', channel: '123' };
    spyOn(component.helperService, 'getCategoryDefinition').and.callFake(() => of({ result: mockData.objectCategoryDefinition.result }));
    const response = component.getFrameWorkDetails();
    response.subscribe(data => {
      expect(data).toBe(mockData.objectCategoryDefinition.result.objectCategoryDefinition);
    });
  });
});
