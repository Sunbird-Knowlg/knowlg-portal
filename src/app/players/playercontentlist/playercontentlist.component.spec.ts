import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router, ActivatedRoute } from '@angular/router';
import { PlayercontentlistComponent } from './playercontentlist.component';
import { of as observableOf, of } from 'rxjs';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MatPaginatorModule } from '@angular/material/paginator';
import { LocalStorageService } from 'src/app/services/user/localstorage.service';
import { HelperService } from 'src/app/services/helper/helper.service';
import { ConfigService } from '../../services/config/config.service';
class RouterStub {
  navigate = jasmine.createSpy('navigate');
}

const fakeActivatedRoute = {
  params: observableOf({ page: 'collection-editor', mimeType: 'pdf' })
};

describe('PlayercontentlistComponent', () => {
  let component: PlayercontentlistComponent;
  let fixture: ComponentFixture<PlayercontentlistComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [PlayercontentlistComponent],
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
    localStorage.setItem('type', JSON.stringify('pdf'));
    fixture = TestBed.createComponent(PlayercontentlistComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#ngOnInit() should call the #contentSearch method', () => {
    spyOn(component, 'contentSearch').and.callThrough();
    component.ngOnInit();
    expect(component.mimeType).toBe('pdf');
    expect(component.contentSearch).toHaveBeenCalled();
  });

  it('#goBack() should navigate to "editors" page', () => {
    const router = TestBed.inject(Router);
    component.goBack();
    expect(router.navigate).toHaveBeenCalledWith(['/players']);
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

  describe('redirectToPlayer', () => {
    it('should navigate to live if mimetype is #pdf', () => {
      const router = TestBed.inject(Router);
      localStorage.setItem('type', JSON.stringify('pdf'));
      component.mimeType = 'pdf';
      component.navigateToPlayer({ status: 'Live', identifier: 'do_123456789' });
      expect(router.navigate).toHaveBeenCalledWith(['players/pdf/do_123456789']);
    });
  });

  it('#handlePageEvent() should set page event data and call #contentSearch method', () => {
    spyOn(component, 'contentSearch').and.callThrough();
    component.mimeType = 'pdf';
    component.handlePageEvent({pageSize: 1, pageIndex: 2, length: 10});
    expect(component.pageSize).toBe(1);
    expect(component.pageIndex).toBe(2);
    expect(component.contentSearch).toHaveBeenCalled();
  });


});
