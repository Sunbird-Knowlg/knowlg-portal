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
      identifier: 'do_21247940906829414411032',
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
  it('#ngOnInit should call ngOnInitl and get user data and content identifier from queryParams', () => {
    spyOn(component, 'initialize').and.callFake(() => of(true));
    component.ngOnInit();
    expect(component.initialize).toHaveBeenCalled();
    expect(component.userData).toBeDefined();
    expect(component.queryParams.identifier).toBeDefined();
  });
  it('#ngOnDestroy should call ngOnDestroy and set null value to editorConfig', () => {
    component.ngOnDestroy();
    expect(component.editorConfig).toBe(null);
  });
  it('#getEditorMode should call getEditorMode and get content status for review case', () => {
    component.content = { status: 'review' };
    const contentStatus = component.getEditorMode();
    expect(contentStatus).toBe('review');
  });
  it('#editorEventListener() should call editorEventListener and navigate to content list', () => {
    const router = TestBed.inject(Router);
    component.editorEventListener({});
    expect(router.navigate).toHaveBeenCalledWith(['editors/content-list']);
  });
  it('#initialize should call initialize method and get the content details', () => {
    spyOn(component, 'getContentDetails').and.callFake(() => of(true));
    component.initialize();
    expect(component.content).toBeDefined();
  });
  it('#getChannel should call getChannel method and get channel details for success case', () => {
    spyOn(component.helperService, 'getChannel').and.callFake(() => of({ result: mockData.channel.result }));
    const response = component.getChannel('01309282781705830427');
    response.subscribe(data => {
      expect(data).toBe(mockData.channel.result.channel);
      expect(data.code).toBe('01309282781705830427');
    });
  });
  it('#getFrameWorkDetails should call getFrameWorkDetails and get CategoryDefinition details for success case', () => {
    component.content = { primaryCategory: 'abc', channel: '123' };
    spyOn(component.helperService, 'getCategoryDefinition').and.callFake(() => of({ result: mockData.objectCategoryDefinition.result }));
    const response = component.getFrameWorkDetails();
    response.subscribe(data => {
      expect(data).toBe(mockData.objectCategoryDefinition.result.objectCategoryDefinition);
      expect(data.objectCategoryDefinition.identifier).toBe('obj-cat:digital-textbook_collection_all');
      expect(data.objectCategoryDefinition.name).toBe('Digital Textbook');
    });
  });
  it('#getContentDetails should call getContentDetails and get content details for success case', () => {
    spyOn(component.helperService, 'getCategoryDefinition').and.callFake(() => of({ result: mockData.contentRead.result }));
    const response = component.getContentDetails('do_11357573655467622411178');
    response.subscribe(data => {
      expect(data).toBe(mockData.contentRead.result.content);
    });
  });
  it('#getPrimaryCategoryData should call getPrimaryCategoryData and return children data', () => {
    const childrenData = mockData.childrenData;
    component.channelData = mockData.channelData;
    const response = component.getPrimaryCategoryData(childrenData);
    expect(response.Content).toEqual('123');
  });
  it('#setHierarchyConfig should call setHierarchyConfig and set editor config details', () => {
    spyOn(component, 'setEditorConfig').and.callThrough();
    spyOn(component, 'getPrimaryCategoryData').and.callThrough();
    component.setHierarchyConfig(mockData.objectMetadata);
    expect(component.setEditorConfig).toHaveBeenCalled();
    expect(component.editorConfig).toBeDefined();
  });
});
