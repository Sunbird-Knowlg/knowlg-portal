import { ComponentFixture, TestBed } from '@angular/core/testing';

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
        { provide: Router, useClass: RouterStub },
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
    expect(router.navigate).toHaveBeenCalledWith(['players/pdf/do_11348995249825382411']);
  });
  it('#navigateToPdf() should not navigate to other then pdf player', () => {
    const router = TestBed.inject(Router);
    component.navigateToPdf();
    expect(router.navigate).not.toHaveBeenCalledWith(['players/epub/do_21312960731822489612047']);
  });
  it('#navigateToEpub() should navigate to epub player', () => {
    const router = TestBed.inject(Router);
    component.navigateToEpub();
    expect(router.navigate).toHaveBeenCalledWith(['players/epub/do_21312960731822489612047']);
  });
  it('#navigateToEpub() should not navigate to then epub player', () => {
    const router = TestBed.inject(Router);
    component.navigateToEpub();
    expect(router.navigate).not.toHaveBeenCalledWith(['players/pdf/do_11348995249825382411']);
  });
  it('#navigateToEcml() should navigate to ecml(interactive) player', () => {
    const router = TestBed.inject(Router);
    component.navigateToEcml();
    expect(router.navigate).toHaveBeenCalledWith(['players/interactive']);
  });
  it('#navigateToEcml() should not navigate to then ecml(interactive) player', () => {
    const router = TestBed.inject(Router);
    component.navigateToEcml();
    expect(router.navigate).not.toHaveBeenCalledWith(['players/epub/do_21312960731822489612047']);
  });
  it('#navigateToVideo() should navigate to video player', () => {
    const router = TestBed.inject(Router);
    component.navigateToVideo();
    expect(router.navigate).toHaveBeenCalledWith(['players/video/do_31309320735055872011111']);
  });
  it('#navigateToVideo() should not navigate to then video player', () => {
    const router = TestBed.inject(Router);
    component.navigateToVideo();
    expect(router.navigate).not.toHaveBeenCalledWith(['players/pdf/do_11348995249825382411']);
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
