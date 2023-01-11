import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { V2PlayerComponent } from './v2-player.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
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

describe('V2PlayerComponent', () => {
  let component: V2PlayerComponent;
  let fixture: ComponentFixture<V2PlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [
        HttpClient,
        { provide: Router, useClass: RouterStub },
        { provide: ActivatedRoute, useValue: mockActivatedRoute }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(V2PlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
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
    expect(component.mimeType).toEqual('pdf');
    expect(router.navigate).toHaveBeenCalledWith(['/home/contentList/pdf']);
    });
  });
