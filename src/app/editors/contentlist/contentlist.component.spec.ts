import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router, ActivatedRoute } from '@angular/router';
import { ContentlistComponent } from './contentlist.component';
import { of as observableOf, of } from 'rxjs';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MatPaginatorModule } from '@angular/material/paginator';
import { LocalStorageService } from 'src/app/services/user/localstorage.service';
import { HelperService } from 'src/app/services/helper/helper.service';
import { ConfigService } from '../../services/config/config.service';
class RouterStub {
  navigate = jasmine.createSpy('navigate');
}

const fakeUserData = {
  userName: 'N11',
  userId: '5a587cc1-e018-4859-a0a8-e842650b9d64',
  channelId: '01309282781705830427',
  role: 'creator'
};

const fakeActivatedRoute = {
  params: observableOf({ page: 'collection-editor' })
};

describe('ContentlistComponent', () => {
  let component: ContentlistComponent;
  let fixture: ComponentFixture<ContentlistComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ContentlistComponent],
      imports: [HttpClientModule, MatPaginatorModule],
      providers: [
        HttpClient,
        { provide: Router, useClass: RouterStub },
        { provide: ActivatedRoute, useValue: fakeActivatedRoute },
        LocalStorageService, HelperService, ConfigService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    localStorage.setItem('type', JSON.stringify('collection'));
    localStorage.setItem('userData', JSON.stringify(fakeUserData));
    fixture = TestBed.createComponent(ContentlistComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  afterEach(() => {
    localStorage.setItem('userData', JSON.stringify(fakeUserData));
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
    const router = TestBed.inject(Router);
    component.goBack();
    expect(router.navigate).toHaveBeenCalledWith(['/editors/']);
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
        content_id: 'do_1233'
      }
    };
    spyOn(helperService, 'createContent').and.callFake(() => of(createContentRes));
    component.createContent();
    expect(component.openContent).toHaveBeenCalled();
  });

  it('#openContent() should navigate to collection editor', () => {
    const router = TestBed.inject(Router);
    component.editorType = 'collection';
    component.openContent('do_123');
    expect(router.navigate).toHaveBeenCalledWith(['/editors/collection-editor'], { queryParams: { identifier: 'do_123' } });
  });

  describe('redirectToEditor', () => {
    it('should navigate to Draft if mimetype is collection and role is #creator', () => {
      const router = TestBed.inject(Router);
      spyOn(component, 'openContent').and.callThrough();
      component.editorType = 'collection';
      component.onSelectContent({ status: 'draft', identifier: 'do_123456789' });
      expect(component.openContent).toHaveBeenCalledWith('do_123456789');
      expect(router.navigate).toHaveBeenCalledWith(['/editors/collection-editor'], { queryParams: { identifier: 'do_123456789' } });
    });
  });

  describe('redirectToPlayer', () => {
    it('should navigate to review if mimetype is #pdf and role is #reviewer', () => {
      const router = TestBed.inject(Router);
      spyOn(component, 'openContent').and.callThrough();
      localStorage.setItem('type', JSON.stringify('pdf'));
      component.userData = { role: 'reviewer' };
      component.editorType = 'pdf';
      component.onSelectContent({ status: 'review', identifier: 'do_123456789' });
      expect(component.openContent).not.toHaveBeenCalled();
      expect(router.navigate).toHaveBeenCalledWith(['players/pdf'], { queryParams: { identifier: 'do_123456789', mode: 'review' } });
    });
  });

  it('#handlePageEvent() should set page event data and call #contentSearch method', () => {
    spyOn(component, 'contentSearch').and.callThrough();
    component.editorType = 'pdf';
    component.handlePageEvent({pageSize: 1, pageIndex: 2, length: 10});
    expect(component.pageSize).toBe(1);
    expect(component.pageIndex).toBe(2);
    expect(component.contentSearch).toHaveBeenCalled();
  });


});
