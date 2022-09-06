import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfplayerComponent } from './pdfplayer.component';

describe('PdfplayerComponent', () => {
  let component: PdfplayerComponent;
  let fixture: ComponentFixture<PdfplayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdfplayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
