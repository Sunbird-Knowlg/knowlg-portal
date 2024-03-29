import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
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

  beforeEach(waitForAsync(() => {
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
  it('#editorEventListener() should navigate to content list', () => {
    const router = TestBed.inject(Router);
    component.editorEventListener({});
    expect(router.navigate).toHaveBeenCalledWith(['editors/content-list']);
  });
  it('#ngOnInit should get user data and content identifier from queryParams', () => {
    spyOn(component, 'initialize').and.callFake(() => of(true));
    component.ngOnInit();
    expect(component.initialize).toHaveBeenCalled();
    expect(component.userData).toBeDefined();
    expect(component.queryParams.identifier).toBeDefined();
  });
  it('#getEditorMode should get content status for review case', () => {
    component.content = { status: 'review' };
    const contentStatus = component.getEditorMode();
    expect(contentStatus).toBe('review');
  });
  it('#setHierarchyConfig should set editor config details', () => {
    spyOn(component, 'setEditorConfig').and.callThrough();
    spyOn(component, 'getPrimaryCategoryData').and.callThrough();
    component.setHierarchyConfig(mockData.objectMetadata);
    expect(component.setEditorConfig).toHaveBeenCalled();
    expect(component.editorConfig).toBeDefined();
  });
  it('#getFrameWorkDetails should get CategoryDefinition details for success api response', () => {
    component.content = { primaryCategory: 'abc', channel: '123' };
    spyOn(component.helperService, 'getCategoryDefinition').and.callFake(() => of({ result: mockData.objectCategoryDefinition.result }));
    const response = component.getFrameWorkDetails();
    response.subscribe(data => {
      expect(data).toBe(mockData.objectCategoryDefinition.result.objectCategoryDefinition);
    });
  });
  it('#getChannel should method and get channel details for success api response', () => {
    spyOn(component.helperService, 'getChannel').and.callFake(() => of({ result: mockData.channel.result }));
    const response = component.getChannel('01309282781705830427');
    response.subscribe(data => {
      expect(data).toBe(mockData.channel.result.channel);
      expect(data.code).toBe('01309282781705830427');
    });
  });
});
