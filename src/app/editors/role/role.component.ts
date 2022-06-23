

import { Component, OnInit} from '@angular/core';
import { LocalStorageService } from '../../services/user/localstorage.service';
import { HelperService } from '../../services/helper/helper.service';
import * as _ from 'lodash-es';
import { Router } from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import { UserComponent } from '../user/user.component';
@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss']
})
export class RoleComponent implements OnInit {
rolesArray = [];
  userArray = [];
  selectedRoleType: any;
  constructor(public localStorageService: LocalStorageService,
              private  dialog: MatDialog,
              public helperService: HelperService, private router: Router) { }
  ngOnInit(): void {
    this.getAllRoleTypes();
  }
  getAllRoleTypes() {
    this.helperService.getAllRoleTypes()
      .subscribe((response) => {
        this.rolesArray = response;
      }, (error) => {
        this.rolesArray = error;
        console.log(error);
      });
  }
  getAllUsersByRoletype(roleType) {
    this.selectedRoleType = roleType;
    this.helperService.getAllUsersByRoleType(roleType)
      .subscribe((response) => {
        this.userArray = response;
        this.openDialog(this.userArray);
      }, (error) => {
        this.userArray = error;
        this.openDialog(this.userArray);
        console.log(error);
      });
  }
  openDialog(userData): void {
   this.dialog.open(UserComponent, {
      data: {
        userArray: userData,
        selectedRoleType: this.selectedRoleType
      }
    });
}
}
