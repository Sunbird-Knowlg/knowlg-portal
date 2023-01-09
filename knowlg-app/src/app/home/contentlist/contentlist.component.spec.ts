import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { ContentlistComponent } from './contentlist.component';
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

describe('ContentlistComponent', () => {
  let component: ContentlistComponent;
  let fixture: ComponentFixture<ContentlistComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentlistComponent ],
      imports: [IonicModule.forRoot(), HttpClientModule, RouterTestingModule],
      providers: [
        HttpClient,
        { provide: Router, useClass: RouterStub },
        { provide: ActivatedRoute, useValue: mockActivatedRoute }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ContentlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
