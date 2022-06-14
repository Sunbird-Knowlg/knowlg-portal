import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router, ActivatedRoute } from '@angular/router';
import { ContentlistComponent } from './contentlist.component';
import { of as observableOf } from 'rxjs';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { LocalStorageService } from 'src/app/services/user/localstorage.service';
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
        LocalStorageService
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

  fit('should create', () => {
    expect(component).toBeTruthy();
  });

  fit('#ngOnInit() should call the #getAllCollectionList method', () => {
    spyOn(component, 'getAllCollectionList').and.callThrough();
    component.ngOnInit();
    expect(component.editorType).toBe('collection');
    expect(component.getAllCollectionList).toHaveBeenCalled();
  });

  fit('#goBack() should navigate to "editors" page', () => {
    spyOn(component, 'getAllCollectionList').and.callThrough();
    component.ngOnInit();
    expect(component.editorType).toBe('collection');
    expect(component.getAllCollectionList).toHaveBeenCalled();
  });

});
