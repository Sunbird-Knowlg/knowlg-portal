import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleComponent } from './role.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { LocalStorageService } from 'src/app/services/user/localstorage.service';
import {MatDialog} from '@angular/material/dialog';
import { MatDialogModule} from '@angular/material/dialog';

describe('RoleComponent', () => {
  let component: RoleComponent;
  let fixture: ComponentFixture<RoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoleComponent ],
      imports: [HttpClientModule, MatDialogModule],
      providers: [
        HttpClient,
        MatDialog,
        LocalStorageService
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
  it('#ngOnInit() should call getAllRoleTypes ', () => {
    spyOn(component, 'getAllRoleTypes').and.callThrough();
    component.ngOnInit();
    expect(component.getAllRoleTypes).toHaveBeenCalled();
  });
});
