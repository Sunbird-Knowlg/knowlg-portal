import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { V1PlayerComponent } from './v1-player.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';

class RouterStub {
  navigate = jasmine.createSpy('navigate');
}

const mockActivatedRoute = {
  snapshot: {
    queryParams: {
      identifier: 'do_21247940906829414411032',
    }
  }
};

describe('V1PlayerComponent', () => {
  let component: V1PlayerComponent;
  let fixture: ComponentFixture<V1PlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ V1PlayerComponent ],
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
    fixture = TestBed.createComponent(V1PlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
