import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayerPage } from './player.page';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';

class RouterStub {
  navigate = jasmine.createSpy('navigate');
}

const mockActivatedRoute: Partial<ActivatedRoute> = {
  snapshot: {
    params: {
      id: '0124963192947507200',
      mimeType: 'pdf'
    },
    data: {
      sendUtmParams: true
    }
  } as any,
  params: of({ id: '0124963192947507200', mimeType: 'pdf' }),
};

describe('PlayerPage', () => {
  let component: PlayerPage;
  let fixture: ComponentFixture<PlayerPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerPage ],
      imports: [IonicModule.forRoot(), HttpClientModule, RouterTestingModule],
      providers: [
        HttpClient,
        { provide: Router, useClass: RouterStub },
        { provide: ActivatedRoute, useValue: mockActivatedRoute }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(PlayerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
