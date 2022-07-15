import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { LocalStorageService } from '../services/user/localstorage.service';
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
      providers: [{ provide: Router, useClass: RouterStub }, LocalStorageService]
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
    expect(router.navigate).toHaveBeenCalledWith(['editors/content-list']);
  });
  it('#goBack should call goBack and navigate to users page', () => {
    const router = TestBed.inject(Router);
    component.goBack();
    expect(router.navigate).toHaveBeenCalledWith(['/users/']);
  });
  it('#ngOnInit should call ngOnInit and get user data details ', () => {
    component.ngOnInit();
    expect(component.userData).toBeDefined();
  });
});
