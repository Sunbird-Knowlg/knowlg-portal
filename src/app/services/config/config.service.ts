import { Injectable } from '@angular/core';
import * as urlConfig from './url.config.json';
import * as playerConfig from './player.config.json';
import * as editorConfig from './editor.config.json';
import * as labelConfig from './label.config.json';
import { ActivatedRoute } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  urlConFig = (urlConfig.default as any);
  playerConfig = (playerConfig.default as any);
  editorConfig = (editorConfig.default as any);
  labelConfig = (labelConfig.default as any);
  constructor(private activatedRoute: ActivatedRoute,) { }

  setConfigData(key, data){
    sessionStorage.setItem(key, data);
  }

  setMetaData(event) {
    const contentId = this.activatedRoute.snapshot.queryParams?.identifier || 'default';
    const collectionId = this.activatedRoute.snapshot.queryParams?.collectionId || contentId;
    sessionStorage.setItem(`player_metadata_${collectionId}_${contentId}`, JSON.stringify(event.metaData));

  }

  getConfigData(key){
    const configData =  JSON.parse(sessionStorage.getItem(key));
    if (key && configData){
      return configData;
    }else{
      return {
        traceId: 'afhjgh',
        sideMenu: {
          showDownload:  true,
          showExit: true,
          showPrint: true,
          showReplay: true,
          showShare: true,
        }
      };
    }
  }
  getV1ConfigData(){
    const config = {
      showEndPage: false,
      endPage: [
        {
          template: 'assessment',
          contentType: ['SelfAssess']
        }
      ],
      showStartPage: true,
      host: '',
      overlay: {
          enableUserSwitcher: true,
          showOverlay: true,
          showNext: true,
          showPrevious: true,
          showSubmit: false,
          showReload: false,
          showUser: false,
          menu: {
              showTeachersInstruction: false
          }
      },
      splash: {
        text: '',
        icon: '',
        bgImage: 'assets/icons/splacebackground_1.png',
        webLink: ''
      },
      apislug: '/action',
      repos: ['/sunbird-plugins/renderer'],
      plugins: [
        {
          id: 'org.sunbird.iframeEvent',
          ver: 1,
          type: 'plugin'
        },
        {
          id: 'org.sunbird.player.endpage',
          ver: 1.1,
          type: 'plugin'
        }
      ],
      sideMenu: {
        showShare: true,
        showDownload: true,
        showExit: false
      },
      enableTelemetryValidation: false
    };
    const configData =  JSON.parse(sessionStorage.getItem('ecmlConfig')) || {};
    config.overlay = {...config.overlay, ...configData};
    return config;
  }
}
