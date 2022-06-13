import { Component, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { ConfigService } from 'src/app/services/config/config.service';
import * as _ from 'lodash-es';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(private configService: ConfigService) { }
  showMainMenuBar = true;
  @Input() sidemenuConfig;
  @Input() configFor;
  showSideMenu: boolean;
  configLable: Array<any> = [];

  ngOnInit(): void {
    this.createLable();
    console.log(this.sidemenuConfig);
  }

  createLable(){
    _.forEach(this.sidemenuConfig, (value, key) => {
      if (!this.isObject(value)) {
        const formatedLable = key.replace( /([A-Z])/g, ' $1' );
        const lable = formatedLable.charAt(0).toUpperCase() + formatedLable.slice(1);
        this.configLable.push(lable);
      }
    });
  }

  toggleSideMenu() {
    this.showSideMenu = !this.showSideMenu;
  }

  isObject(val): boolean { return typeof val === 'object'; }

  onEnter(){
    let playerConfigData = {
      sideMenu: this.sidemenuConfig
    };

    if (this.configFor === 'ecmlConfig'){
      playerConfigData = this.sidemenuConfig;
    }

    localStorage.setItem(this.configFor, JSON.stringify(playerConfigData));
    location.reload();
  }

}
