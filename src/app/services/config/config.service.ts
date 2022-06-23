import { Injectable } from '@angular/core';
import * as urlConfig from './url.config.json';
import * as playerConfig from './player.config.json';
import * as editorConfig from './editor.config.json';
import * as labelConfig from './label.config.json';
@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  urlConFig = (urlConfig.default as any);
  playerConfig = (playerConfig.default as any);
  editorConfig = (editorConfig.default as any);
  labelConfig = (labelConfig.default as any);
  constructor() { }
}
