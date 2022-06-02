import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EpubComponent } from './epub.component';
import { ActivatedRoute } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';

const mockActivatedRoute = {
  snapshot: {
    queryParams: {
      identifier: 'do_21247940906829414411032',
    }
  }
};

describe('EpubComponent', () => {
  let component: EpubComponent;
  let fixture: ComponentFixture<EpubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EpubComponent ],
      imports: [HttpClientModule],
      providers: [
        HttpClient,
        { provide: ActivatedRoute, useValue: mockActivatedRoute }
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EpubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
