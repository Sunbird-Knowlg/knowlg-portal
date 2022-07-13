import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CollectionEditorComponent } from './collection-editor.component';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
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
  it('#ngOnInit should call ngOnInitl and get user data and content identifier', () => {
    spyOn(component, 'initialize').and.callFake(() => of(true));
    component.ngOnInit();
    expect(component.initialize).toHaveBeenCalled();
    expect(component.userData).toBeDefined();
    expect(component.queryParams.identifier).toBeDefined();
  });
  it('#ngOnDestroy should call ngOnDestroy and set editorConfig to null', () => {
    component.ngOnDestroy();
    expect(component.editorConfig).toBe(null);
  });
  it('#getEditorMode should call getEditorMode and get content status', () => {
    component.content = {status : 'review'};
    const contentStatus = component.getEditorMode();
    expect(contentStatus).toBe('review');
  });
  it('#editorEventListener() should navigate to content list', () => {
    const router = TestBed.inject(Router);
    component.editorEventListener({});
    expect(router.navigate).toHaveBeenCalledWith(['editors/content-list']);
  });
  it('#initialize should call initialize', () => {
    spyOn(component, 'getContentDetails').and.callFake(() => of(true));
    component.initialize();
    expect(component.content).toBeDefined();
  });
  it('#getChannel should call getChannel and get channel details', () => {
    spyOn(component.helperService, 'getChannel').and.callFake(() => of(true));
    component.getChannel('123456');
    expect(component.helperService.getChannel).toHaveBeenCalled();
  });
});
