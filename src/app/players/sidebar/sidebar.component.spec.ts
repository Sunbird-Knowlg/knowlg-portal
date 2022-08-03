import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { SidebarComponent } from './sidebar.component';

class RouterStub {
  navigate = jasmine.createSpy('navigate');
}

const mockActivatedRoute = {
  snapshot: {
    queryParams: {
      identifier: 'do_21247940906829414411032',
      collectionId: 'do_1234'
    }
  }
};

describe('SidebarComponent', () => {
  let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarComponent ],
      providers: [
        { provide: Router, useClass: RouterStub },
        { provide: ActivatedRoute, useValue: mockActivatedRoute }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('#ngOnInit() should call the create lab method', () => {
    spyOn(component, 'createLable').and.callThrough();
    component.ngOnInit();
    expect(component.createLable).toHaveBeenCalled();
  });
  it('#toggleSideMenu() should toggle side menu option to false', () => {
    component.showSideMenu = true;
    component.toggleSideMenu();
    expect(component.showSideMenu).toBeFalsy();
  });
  it('#toggleSideMenu() should toggle side menu option to true', () => {
    component.showSideMenu = false;
    component.toggleSideMenu();
    expect(component.showSideMenu).toBeTruthy();
  });
  it('#isObject() should check given value is object ', () => {
    const data = component.isObject({abc: '123'});
    expect(data).toBeTruthy();
  });
});
