import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../../services/user/localstorage.service';
import { HelperService } from '../../services/helper/helper.service';
import * as _ from 'lodash-es';
import { MatDialog } from '@angular/material/dialog';
import { UserComponent } from '../user/user.component';
import { ConfigService } from '../../services/config/config.service';
@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss']
})
export class RoleComponent implements OnInit {
  rolesData = [];
  selectedRoleType: any;
  constructor(public localStorageService: LocalStorageService,
              public dialog: MatDialog,
              public configService: ConfigService,
              public helperService: HelperService) { }
  ngOnInit(): void {
    this.getAllRoleTypes();
  }
  getAllRoleTypes() {
    this.helperService.getAllRoleTypes().subscribe((response) => {
      this.rolesData = _.get(response, 'result.roles');
    }, (error) => {
      console.log(error);
    });
  }
  getAllUsersByRoleType(roleType) {
    this.selectedRoleType = roleType;
    this.helperService.getAllUsersByRoleType(roleType).subscribe((response) => {
      const usersData = _.get(response, 'result.users');
      this.openDialog(usersData);
    }, (error) => {
      console.log(error);
    });
  }
  openDialog(users): void {
    this.dialog.open(UserComponent, {
      data: {
        usersData: users,
        selectedRoleType: this.selectedRoleType
      }
    });
  }
}
