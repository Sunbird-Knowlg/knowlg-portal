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
    component.navigateToPdf();
    expect(localStorage.getItem('type')).toEqual('"pdf"');
  });
  it('#navigateToEpub() should navigate to epub player', () => {
    component.navigateToEpub();
    expect(localStorage.getItem('type')).toEqual('"epub"');
  });
  it('#navigateToEcml() should navigate to ecml(interactive) player', () => {
    component.navigateToEcml();
    expect(localStorage.getItem('type')).toEqual('"ecml"');
  });
  it('#navigateToVideo() should navigate to video player', () => {
    component.navigateToVideo();
    expect(localStorage.getItem('type')).toEqual('"video"');
  });
  it('#naviagteToCollectionPlayer() should navigate to collection player', () => {
    const router = TestBed.inject(Router);
    component.naviagteToCollectionPlayer();
    expect(router.navigate).toHaveBeenCalledWith(['players/collection']);
  });
  it('#naviagteToCollectionPlayer() should not navigate to then collection player', () => {
    const router = TestBed.inject(Router);
    component.naviagteToCollectionPlayer();
    expect(router.navigate).not.toHaveBeenCalledWith(['players/video/do_31309320735055872011111']);
  });
});
