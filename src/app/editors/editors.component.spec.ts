import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { EditorsComponent } from './editors.component';

class RouterStub {
  navigate = jasmine.createSpy('navigate');
}

describe('EditorsComponent', () => {
  let component: EditorsComponent;
  let fixture: ComponentFixture<EditorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditorsComponent ],
      providers: [{ provide: Router, useClass: RouterStub }]
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
    expect(router.navigate).toHaveBeenCalledWith(['editors/content-list/collection-editor']);
  });

  it('#navigateToFileUploadEditor should navigate to "fileUploadEditor" ', () => {
    const router = TestBed.inject(Router);
    component.navigateToFileUploadEditor('do_123456789');
    expect(router.navigate).toHaveBeenCalledWith(['editors/file-upload-editor'], { queryParams: { identifier: 'do_123456789' } });
  });

  it('#navigateToInteractiveEditor should navigate to "InteractiveEditor" ', () => {
    const router = TestBed.inject(Router);
    component.navigateToInteractiveEditor('do_123456789');
    expect(router.navigate).toHaveBeenCalledWith(['editors/interactive-editor'], { queryParams: { identifier: 'do_123456789' } });
  });


});
