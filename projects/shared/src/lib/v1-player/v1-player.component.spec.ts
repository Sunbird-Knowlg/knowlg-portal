import { ComponentFixture, TestBed } from '@angular/core/testing';

import { V1PlayerComponent } from './v1-player.component';

describe('V1PlayerComponent', () => {
  let component: V1PlayerComponent;
  let fixture: ComponentFixture<V1PlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ V1PlayerComponent ]
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

  it('should initialize the player with playerConfig', (done) => {
    component.previewElement = {
      nativeElement: {
        contentWindow: {
          initializePreview: function(){},
          addEventListener: function(){}
        },
        src: ''
      }
    }
    spyOn(component.previewElement.nativeElement.contentWindow, 'initializePreview').and.callThrough();
    component.playerConfig = {
      context: {
          actor: {
              id: '123456'
          }
      },
      metadata: {
        basePath: 'basePath'
      }
    }
    component.ngAfterViewInit();
    setTimeout(() => {
      expect(component.playerConfig).toEqual({context: {actor: {id: '123456'}}, metadata: {basePath: 'basePath'}});
      done();
    }, 100);
  })
});
