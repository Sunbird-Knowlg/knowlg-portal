import { TestBed } from '@angular/core/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ContentService } from './content.service';
import { of } from 'rxjs';

describe('ContentService', () => {
  let service: ContentService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [HttpClient]
    });
    service = TestBed.inject(ContentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return v1player config', () => {
    service.prepareV1PlayerConfig({result: { content :{
      'mimeType': 'application/vnd.ekstep.ecml-archive',
      'body': '',
      'objectType': 'Content',
      'primaryCategory': null,
      'artifactUrl': 'https://sunbirddev.blob.core.windows.net/sunbird-content-dev/content/do_113540914336456704180/artifact/1652944954897_do_113540914336456704180.zip',
      'contentType': 'Resource',
      'identifier': 'do_113540914336456704180',
      'languageCode': [
          'en'
      ],
      'name': 'Gourav sample ECML'
    }}});

    expect(service.playerConfig).toEqual({
          "metadata": {
              "mimeType": "application/vnd.ekstep.ecml-archive",
              "body": "",
              "objectType": "Content",
              "primaryCategory": null,
              "artifactUrl": "https://sunbirddev.blob.core.windows.net/sunbird-content-dev/content/do_113540914336456704180/artifact/1652944954897_do_113540914336456704180.zip",
              "contentType": "Resource",
              "identifier": "do_113540914336456704180",
              "languageCode": [
                  "en"
              ],
              "name": "Gourav sample ECML"
          },
          "config": {
              "showEndPage": false,
              "endPage": [
                  {
                      "template": "assessment",
                      "contentType": [
                          "SelfAssess"
                      ]
                  }
              ],
              "showStartPage": true,
              "host": "",
              "overlay": {
                  "enableUserSwitcher": false,
                  "showOverlay": true,
                  "showNext": true,
                  "showPrevious": true,
                  "showSubmit": true,
                  "showReload": true,
                  "showUser": false,
                  "menu": {
                      "showTeachersInstruction": false
                  }
              },
              "splash": {
                  "text": "",
                  "icon": "",
                  "bgImage": "assets/icons/splacebackground_1.png",
                  "webLink": ""
              },
              "plugins": [
                  {
                      "id": "org.sunbird.player.endpage",
                      "ver": 1.1,
                      "type": "plugin"
                  }
              ],
              "sideMenu": {
                  "showShare": true,
                  "showDownload": true,
                  "showExit": true
              }
          },
          "context": {
              "mode": "play",
              "authToken": "",
              "sid": "7283cf2e-d215-9944-b0c5-269489c6fa56",
              "did": "3c0a3724311fe944dec5df559cc4e006",
              "uid": "anonymous",
              "channel": "505c7c48ac6dc1edc9b08f21db5a571d",
              "pdata": {
                  "id": "sunbird.portal",
                  "ver": "3.2.12",
                  "pid": "sunbird-portal.contentplayer"
              },
              "contentId": "do_11319720466326323219",
              "contextRollup": {
                  "l1": "505c7c48ac6dc1edc9b08f21db5a571d"
              },
              "tags": [
                  ""
              ],
              "cdata": [],
              "timeDiff": 0,
              "objectRollup": {},
              "host": "",
              "endpoint": "",
              "userData": {
                  "firstName": "Gourav",
                  "lastName": "More"
              }
          },
          "data": ""
    });
  })

  it('should return mimeType ecml', () => {
    const returnValue = service.getMimeType('ecml');
    expect(returnValue).toEqual('application/vnd.ekstep.ecml-archive');
  });

  it('should return player redirect path for ecml content', () => {
    const returnValue = service.playerRedirectURL('ecml');
    expect(returnValue).toEqual('player/v1/ecml');
  });
});
