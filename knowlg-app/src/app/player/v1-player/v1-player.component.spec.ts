import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { V1PlayerComponent } from './v1-player.component';
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
      mimeType: 'ecml'
    },
    data: {
      sendUtmParams: true
    }
  } as any,
  params: of({ id: '0124963192947507200', mimeType: 'ecml' }),
};


describe('V1PlayerComponent', () => {
  let component: V1PlayerComponent;
  let fixture: ComponentFixture<V1PlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ V1PlayerComponent ],
      imports: [HttpClientModule, RouterTestingModule],
      providers: [
        HttpClient,
        { provide: Router, useClass: RouterStub },
        { provide: ActivatedRoute, useValue: mockActivatedRoute }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(V1PlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('mimeType should be ecml', () => {
    expect(component.mimeType).toEqual('ecml');
  });

  it('should exit and redirect to the content list page', () => {
    const router = TestBed.inject(Router);
    component.playerEvent({detail : {
      eid: 'EXIT',
      ver: '1.0',
      edata: {
          type: 'EXIT',
          currentPage: 1,
          duration: 763
      },
      metaData: {
          pagesVisited: [],
          totalPages: 1,
          duration: [],
          zoom: [],
          rotation: []
      }
    }});
    expect(component.mimeType).toEqual('ecml');
    expect(router.navigate).toHaveBeenCalledWith(['/home/contentList/ecml']);
    });
});
