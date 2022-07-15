import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleComponent } from './role.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { LocalStorageService } from 'src/app/services/user/localstorage.service';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { HelperService } from '../../services/helper/helper.service';
import { of } from 'rxjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ActivatedRoute, Router } from '@angular/router';
import { UserComponent } from '../user/user.component';
import {mockData} from './role.component.spec.data';
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

describe('RoleComponent', () => {
  let component: RoleComponent;
  let fixture: ComponentFixture<RoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RoleComponent],
      imports: [HttpClientModule, MatDialogModule, BrowserAnimationsModule],
      providers: [
        HttpClient,
        MatDialog,
        LocalStorageService,
        { provide: Router, useClass: RouterStub },
        HelperService,
        { provide: ActivatedRoute, useValue: mockActivatedRoute }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('#ngOnInit() should call getAllRoleTypes ', () => {
    spyOn(component, 'getAllRoleTypes').and.callThrough();
    component.ngOnInit();
    expect(component.getAllRoleTypes).toHaveBeenCalled();
  });
  it('#getAllRoleTypes() should call getAllRoleTypes', () => {
    const helperService: HelperService = TestBed.inject(HelperService);
    spyOn(helperService, 'getAllRoleTypes').and.callFake(() => of(mockData.roleData));
    component.getAllRoleTypes();
    expect(component.rolesData).toBeDefined();
    expect(component.rolesData.length).toEqual(2);
  });
  it('#getAllUsersByRoleType() should call getAllUsersByRoleType for reviwer role', () => {
    const helperService: HelperService = TestBed.inject(HelperService);
    spyOn(component, 'openDialog').and.callThrough();
    spyOn(helperService, 'getAllUsersByRoleType').and.callFake(() => of(mockData.reviewerUserData));
    component.getAllUsersByRoleType('reviwer');
    expect(component.openDialog).toHaveBeenCalledWith(mockData.reviewerUserData.result.users);
    expect(component.selectedRoleType).toBe('reviwer');
  });
  it('#getAllUsersByRoleType() should call getAllUsersByRoleType for creator role', () => {
    const helperService: HelperService = TestBed.inject(HelperService);
    spyOn(component, 'openDialog').and.callThrough();
    spyOn(helperService, 'getAllUsersByRoleType').and.callFake(() => of(mockData.creatorUserData));
    component.getAllUsersByRoleType('creator');
    expect(component.openDialog).toHaveBeenCalledWith(mockData.creatorUserData.result.users);
    expect(component.selectedRoleType).toBe('creator');
  });
  it('#openDialog() should call openDialog ', () => {
    component.selectedRoleType = 'reviwer';
    const spy = spyOn(component.dialog, 'open').and.callThrough();
    component.openDialog(mockData.reviewerUserData.result.users);
    expect(spy).toHaveBeenCalledWith(UserComponent, {data: {usersData: mockData.reviewerUserData.result.users,
      selectedRoleType: component.selectedRoleType}});
  });
});
