import { Component, OnInit, Inject } from '@angular/core';
import { LocalStorageService } from '../../services/user/localstorage.service';
import * as _ from 'lodash-es';
import { Router } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  userArray = [];
  constructor(public localStorageService: LocalStorageService,
              private dialogRef: MatDialogRef<UserComponent>,
              @Inject(MAT_DIALOG_DATA) public data: { name: string },
              private router: Router) { }

  ngOnInit(): void {
    this.userArray = _.get(this.data, 'userArray');
  }
  selectUser(user) {
    user.role = _.get(this.data, 'selectedRoleType');
    this.localStorageService.setItem('userData', user);
    this.closeMe();
    this.router.navigate(['/editors']);
  }
  closeMe() {
    this.dialogRef.close();
  }
}
