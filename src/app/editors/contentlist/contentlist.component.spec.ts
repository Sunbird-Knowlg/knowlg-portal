import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router, ActivatedRoute } from '@angular/router';
import { ContentlistComponent } from './contentlist.component';
import {of as observableOf } from 'rxjs';
import { HttpClientModule, HttpClient } from '@angular/common/http';
class RouterStub {
  navigate = jasmine.createSpy('navigate');
}

const fakeActivatedRoute = {
  params: observableOf({ page: 'collection-editor' })
};

describe('ContentlistComponent', () => {
  let component: ContentlistComponent;
  let fixture: ComponentFixture<ContentlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentlistComponent ],
      imports: [HttpClientModule],
      providers: [
        HttpClient,
        { provide: Router, useClass: RouterStub },
        { provide: ActivatedRoute, useValue: fakeActivatedRoute },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
