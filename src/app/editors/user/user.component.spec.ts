import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { UserComponent } from './user.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { LocalStorageService } from 'src/app/services/user/localstorage.service';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
class RouterStub {
  navigate = jasmine.createSpy('navigate');
}
const userData = {
  usersData: [{
    userName: 'Creator 2',
    userId: '5a587cc1-e018-4859-a0a8-e842650b9d64',
    channelId: '01309282781705830427',
    userToken: '5a587cc1-e018-4859-a0a8-e842650b9d64'
  }],
  selectedRoleType: 'creator'
};

const mockActivatedRoute = {
  snapshot: {
    queryParams: {
      identifier: 'do_21247940906829414411032',
      collectionId: 'do_1234'
    }
  }
};


describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  const dialog = {
    close: () => { }
  };
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [UserComponent],
      imports: [HttpClientModule, MatDialogModule],
      providers: [
        { provide: MatDialogRef, useValue: dialog },
        { provide: Router, useClass: RouterStub },
        { provide: MAT_DIALOG_DATA, useValue: { userData } },
        HttpClient,
        LocalStorageService,
        { provide: ActivatedRoute, useValue: mockActivatedRoute }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('#ngOnInit() should get usersData ', () => {
    component.data = userData;
    component.ngOnInit();
    expect(component.usersData).toBeDefined();
  });
  it('#selectUser() should call selectUser and navigate to editor list component', () => {
    const router = TestBed.inject(Router);
    spyOn(component.dialogRef, 'close').and.callThrough();
    component.data = userData;
    spyOn(component, 'closeMe').and.callThrough();
    component.selectUser(userData.usersData);
    expect(component.closeMe).toHaveBeenCalled();
    expect(router.navigate).toHaveBeenCalledWith(['/editors']);
  });
  it('#closeMe() should call closeMe ', () => {
    const spy = spyOn(component.dialogRef, 'close').and.callThrough();
    component.closeMe();
    expect(spy).toHaveBeenCalled();
  });
});
