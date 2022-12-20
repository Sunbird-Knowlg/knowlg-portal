import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LocalStorageService } from 'src/app/services/user/localstorage.service';

import { PlayersListComponent } from './players-list.component';
import { Router } from '@angular/router';
class RouterStub {
  navigate = jasmine.createSpy('navigate');
}

describe('PlayersListComponent', () => {
  let component: PlayersListComponent;
  let fixture: ComponentFixture<PlayersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayersListComponent ],
      providers: [
        { provide: Router, useClass: RouterStub, LocalStorageService },
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('#navigateToPdf() should navigate to pdf player', () => {
    const router = TestBed.inject(Router);
    component.navigateToContentList('pdf');
    expect(router.navigate).toHaveBeenCalledWith(['player-content-list/pdf']);
  });
  it('#navigateToEpub() should navigate to epub player', () => {
    const router = TestBed.inject(Router);
    component.navigateToContentList('epub');
    expect(router.navigate).toHaveBeenCalledWith(['player-content-list/epub']);
  });
  it('#navigateToEcml() should navigate to ecml(interactive) player', () => {
    const router = TestBed.inject(Router);
    component.navigateToContentList('interactive');
    expect(router.navigate).toHaveBeenCalledWith(['player-content-list/interactive']);
  });
  it('#navigateToVideo() should navigate to video player', () => {
    const router = TestBed.inject(Router);
    component.navigateToContentList('video');
    expect(router.navigate).toHaveBeenCalledWith(['player-content-list/video']);
  });
  it('#naviagteToCollectionPlayer() should navigate to collection player', () => {
    const router = TestBed.inject(Router);
    component.navigateToContentList('collection');
    expect(router.navigate).toHaveBeenCalledWith(['player-content-list/collection']);
  });
});
