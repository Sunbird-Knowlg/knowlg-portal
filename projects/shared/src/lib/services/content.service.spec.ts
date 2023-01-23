import { HttpHeaders, HttpParams } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';

import { ContentService } from './content.service';

describe('ContentService', () => {
  let service: ContentService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(ContentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return observable on call read with content Id and options', () => {
    const readCall = service.read("do_1223", {});
    expect(typeof (readCall)).toBe(typeof (new Observable()));
  })

  it('should return observable on call search with body and options', () => {
    const searchCall = service.search({ mimeType: "application/pdf" }, new HttpParams(), new HttpHeaders());
    expect(typeof (searchCall)).toBe(typeof (new Observable()));
  })

  it('should initialize with default config', () => {
    const spy = spyOn(service, 'initialize').and.callThrough();
    service.initialize("http://localhost");
    expect(spy).toHaveBeenCalled();

  })

});
