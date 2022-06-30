import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router, ActivatedRoute } from '@angular/router';
import { ContentlistComponent } from './contentlist.component';
import { of as observableOf, of } from 'rxjs';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { LocalStorageService } from 'src/app/services/user/localstorage.service';
import { HelperService } from 'src/app/services/helper/helper.service';
class RouterStub {
  navigate = jasmine.createSpy('navigate');
}

const fakeActivatedRoute = {
  params: observableOf({ page: 'collection-editor' })
};

describe('ContentlistComponent', () => {
  let component: ContentlistComponent;
  let fixture: ComponentFixture<ContentlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ContentlistComponent],
      imports: [HttpClientModule],
      providers: [
        HttpClient,
        { provide: Router, useClass: RouterStub },
        { provide: ActivatedRoute, useValue: fakeActivatedRoute },
        LocalStorageService, HelperService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    localStorage.setItem('type', JSON.stringify('collection'));
    fixture = TestBed.createComponent(ContentlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#ngOnInit() should call the #contentSearch method', () => {
    spyOn(component, 'contentSearch').and.callThrough();
    component.ngOnInit();
    expect(component.editorType).toBe('collection');
    expect(component.contentSearch).toHaveBeenCalled();
  });

  it('#goBack() should navigate to "editors" page', () => {
    spyOn(component, 'contentSearch').and.callThrough();
    component.ngOnInit();
    expect(component.editorType).toBe('collection');
    expect(component.contentSearch).toHaveBeenCalled();
  });

  it('#contentSearch() should fetch the contents', () => {
    const helperService: HelperService = TestBed.inject(HelperService);
    spyOn(helperService, 'contentSearch').and.callFake(() => of({
      result: {
        content: [{ identifier: 'do_123', name: 'test' }]
      }
    }));
    component.contentSearch();
    expect(component.contentArray.length).toBe(1);
  });

  it('#createContent() should call #openContent method when editorType is not collection | ECML', () => {
    spyOn(component, 'openContent').and.callThrough();
    component.editorType = 'pdf';
    component.createContent();
    expect(component.openContent).toHaveBeenCalled();
  });

  it('#createContent() should create the content', () => {
    spyOn(component, 'openContent').and.callThrough();
    const helperService: HelperService = TestBed.inject(HelperService);
    const createContentRes = {
      result: {
        identifier: 'do_1233'
      }
    };
    spyOn(helperService, 'createContent').and.callFake(() => of(createContentRes));
    component.createContent();
    expect(component.openContent).toHaveBeenCalledWith(createContentRes.result.identifier);
  });

  it('#openContent() should navigate to collection editor', () => {
    const router = TestBed.inject(Router);
    component.openContent('do_123');
    expect(router.navigate).toHaveBeenCalledWith(['/editors/collection-editor'], { queryParams: { identifier: 'do_123' } });
  });

});
