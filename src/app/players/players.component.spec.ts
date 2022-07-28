import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { PlayersComponent } from './players.component';
class RouterStub {
  navigate = jasmine.createSpy('navigate');
}

describe('PlayersComponent', () => {
  let component: PlayersComponent;
  let fixture: ComponentFixture<PlayersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PlayersComponent],
      providers: [
        { provide: Router, useClass: RouterStub },
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('#navigateToPdf() should navigate to pdf player', () => {
    const router = TestBed.inject(Router);
    component.navigateToPdf();
    expect(router.navigate).toHaveBeenCalledWith(['players/pdf']);
  });
  it('#navigateToPdf() should not navigate to other then pdf player', () => {
    const router = TestBed.inject(Router);
    component.navigateToPdf();
    expect(router.navigate).not.toHaveBeenCalledWith(['players/epub']);
  });
  it('#navigateToEpub() should navigate to epub player', () => {
    const router = TestBed.inject(Router);
    component.navigateToEpub();
    expect(router.navigate).toHaveBeenCalledWith(['players/epub']);
  });
  it('#navigateToEpub() should not navigate to then epub player', () => {
    const router = TestBed.inject(Router);
    component.navigateToEpub();
    expect(router.navigate).not.toHaveBeenCalledWith(['players/pdf']);
  });
  it('#navigateToEcml() should navigate to ecml(interactive) player', () => {
    const router = TestBed.inject(Router);
    component.navigateToEcml();
    expect(router.navigate).toHaveBeenCalledWith(['players/interactive']);
  });
  it('#navigateToEcml() should not navigate to ecml(interactive) player', () => {
    const router = TestBed.inject(Router);
    component.navigateToEcml();
    expect(router.navigate).not.toHaveBeenCalledWith(['players/epub']);
  });
  it('#navigateToVideo() should navigate to video player', () => {
    const router = TestBed.inject(Router);
    component.navigateToVideo();
    expect(router.navigate).toHaveBeenCalledWith(['players/video']);
  });
  it('#navigateToVideo() should not navigate to video player', () => {
    const router = TestBed.inject(Router);
    component.navigateToVideo();
    expect(router.navigate).not.toHaveBeenCalledWith(['players/pdf']);
  });
  it('#naviagteToCollectionPlayer() should navigate to collection player', () => {
    const router = TestBed.inject(Router);
    component.naviagteToCollectionPlayer();
    expect(router.navigate).toHaveBeenCalledWith(['players/collection']);
  });
  it('#naviagteToCollectionPlayer() should not navigate to collection player', () => {
    const router = TestBed.inject(Router);
    component.naviagteToCollectionPlayer();
    expect(router.navigate).not.toHaveBeenCalledWith(['players/video']);
  });
});
