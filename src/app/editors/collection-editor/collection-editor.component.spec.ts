import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CollectionEditorComponent } from './collection-editor.component';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { mockData } from './collection-editor.component.data';
class RouterStub {
  navigate = jasmine.createSpy('navigate');
}

const mockActivatedRoute = {
  snapshot: {
    queryParams: {
      identifier: 'do_21358476305801216017',
    }
  }
};

describe('CollectionEditorComponent', () => {
  let component: CollectionEditorComponent;
  let fixture: ComponentFixture<CollectionEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CollectionEditorComponent],
      imports: [HttpClientModule],
      providers: [
        HttpClient,
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        { provide: Router, useClass: RouterStub }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionEditorComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#editorEventListener should navigate to "content-list" page', () => {
    const router = TestBed.inject(Router);
    component.editorEventListener({});
    expect(router.navigate).toHaveBeenCalledWith(['editors/content-list']);
  });
  it('#editorEventListener() should call  and navigate to content list', () => {
    const router = TestBed.inject(Router);
    component.editorEventListener({});
    expect(router.navigate).toHaveBeenCalledWith(['editors/content-list']);
  });

});
