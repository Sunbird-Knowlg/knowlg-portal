import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { HomeComponent } from './home.component';

class RouterStub {
  navigate = jasmine.createSpy('navigate');
}

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      providers: [{ provide: Router, useClass: RouterStub }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('#navigateToPlayers should navigate to players page', () => {
    const router = TestBed.inject(Router);
    component.navigateToPlayers();
    expect(router.navigate).toHaveBeenCalledWith(['/players']);
  });
  it('#navigateToUsers should navigate to users page', () => {
    const router = TestBed.inject(Router);
    component.navigateToUsers();
    expect(router.navigate).toHaveBeenCalledWith(['/users']);
  });
});
