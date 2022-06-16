import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FileUploadEditorComponent } from './file-upload-editor.component';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
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

describe('FileUploadEditorComponent', () => {
    let component: FileUploadEditorComponent;
    let fixture: ComponentFixture<FileUploadEditorComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [FileUploadEditorComponent],
            imports: [HttpClientModule],
            providers: [
                HttpClient,
                { provide: Router, useClass: RouterStub },
                { provide: ActivatedRoute, useValue: mockActivatedRoute },
                {
                    provide: DomSanitizer,
                    useValue: {
                        sanitize: (ctx: any, val: any) => val,
                        bypassSecurityTrustResourceUrl: (val: any) => val,
                    },
                }
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(FileUploadEditorComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    //   it('#editorEventListener should navigate to "collection-editor" ', () => {
    //     const router = TestBed.inject(Router);
    //     component.editorEventListener({});
    //     expect(router.navigate).toHaveBeenCalledWith(['editors/content-list/collection-editor']);
    //   });

    it('Should launch the file uplaod editor', () => {
        component.ngOnInit();
    });

    it('#editorURL should return trusted resource URL ', () => {
        const value = component.editorURL();
        expect(value).toBe('generic-editor/index.html?4.9.0.c10c531');
    });

});
