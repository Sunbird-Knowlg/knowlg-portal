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
      declarations: [ PlayersComponent ],
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
});
