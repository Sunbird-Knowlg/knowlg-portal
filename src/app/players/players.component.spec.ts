import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayersComponent } from './players.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { PlayerService } from 'src/app/services/player/player.service';
import { ConfigService } from 'src/app/services/config/config.service';
import { of } from 'rxjs';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

class RouterStub {
  navigate = jasmine.createSpy('navigate');
}
const mockActivatedRoute = {
  snapshot: {
    queryParams: {
      id: 'do_21247940906829414411032',
    },
    params: {
      mimeType: 'pdf',
      id: '1234'
    }
  }
};
describe('PlayersComponent', () => {
  let component: PlayersComponent;
  let fixture: ComponentFixture<PlayersComponent>;
  let playerServiceMock;
  beforeEach(waitForAsync(() => {
    playerServiceMock = {
      contentChangeObservable: {
        subscribe: () => {
        }
      }
    };
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [PlayersComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        HttpClient, ConfigService,
        { provide: Router, useClass: RouterStub },
        { provide: PlayerService, useValue: playerServiceMock },
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayersComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should call setConfig() method and define playerSettingconfig and sidemenuConfig', () => {
    spyOn(component.configService, 'getConfigData').and.returnValue(
      {
        traceId: 'afhjgh',
        sideMenu: {
          showDownload: true,
          showExit: true,
          showPrint: true,
          showReplay: true,
          showShare: true,
        }
      });
    component.setConfig();
    expect(component.playerSettingconfig).toBeDefined();
    expect(component.sidemenuConfig).toBeDefined();
  });
  it('should call ngOnInit and define configType and call setConfig method for pdf content', () => {
    /* tslint:disable:no-string-literal */
    component['activatedRoute'].snapshot.params.mimeType = 'pdf';
    spyOn(component, 'getContentDetails').and.callFake(() => of({}));
    spyOn(component, 'setConfig').and.callFake(() => of({}));
    component.ngOnInit();
    expect(component.setConfig).toHaveBeenCalled();
    expect(component.getContentDetails).toHaveBeenCalled();
    expect(component.configType).toBe('pdfConfig');
  });
  it('should call ngOnInit and define configType and call setConfig method for epub content', () => {
    /* tslint:disable:no-string-literal */
    component['activatedRoute'].snapshot.params.mimeType = 'epub';
    spyOn(component, 'getContentDetails').and.callFake(() => of({}));
    spyOn(component, 'setConfig').and.callFake(() => of({}));
    component.ngOnInit();
    expect(component.setConfig).toHaveBeenCalled();
    expect(component.getContentDetails).toHaveBeenCalled();
    expect(component.configType).toBe('epubConfig');
  });
  it('should call ngOnInit and define configType and call setConfig method for video content', () => {
    /* tslint:disable:no-string-literal */
    component['activatedRoute'].snapshot.params.mimeType = 'video';
    spyOn(component, 'getContentDetails').and.callFake(() => of({}));
    spyOn(component, 'setConfig').and.callFake(() => of({}));
    component.ngOnInit();
    expect(component.setConfig).toHaveBeenCalled();
    expect(component.getContentDetails).toHaveBeenCalled();
    expect(component.configType).toBe('videoConfig');
  });
});
