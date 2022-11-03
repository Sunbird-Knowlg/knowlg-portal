import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayersComponent } from './players.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { PlayerService } from 'src/app/services/player/player.service';
import { ConfigService } from 'src/app/services/config/config.service';

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

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [PlayersComponent],
      providers: [
        HttpClient, PlayerService , ConfigService,
        { provide: Router, useClass: RouterStub },
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayersComponent);
    component = fixture.componentInstance;
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });

});
