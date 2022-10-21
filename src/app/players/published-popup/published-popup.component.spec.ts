import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HelperService } from 'src/app/services/helper/helper.service';
import { PublishedPopupComponent } from './published-popup.component';
import { of, throwError } from 'rxjs';

class RouterStub {
  navigate = jasmine.createSpy('navigate');
}

const matDialogData = {
  contentId: 'do_123456789',
  userId: '123'
};

const mockActivatedRoute = {
  snapshot: {
    queryParams: {
      identifier: 'do_21247940906829414411032',
      collectionId: 'do_1234'
    }
  }
};

describe('HeaderComponent', () => {
  let component: PublishedPopupComponent;
  let fixture: ComponentFixture<PublishedPopupComponent>;
  const dialog = {
    close: () => { }
  };
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublishedPopupComponent ],
      imports: [HttpClientModule],
      providers: [
        HttpClient,
        HelperService,
        { provide: Router, useClass: RouterStub },
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        { provide: MatDialogRef, useValue: dialog },
        { provide: MAT_DIALOG_DATA, useValue: matDialogData },
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublishedPopupComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#ngOnInit should set content data and call #getCheckListConfig method', () => {
    spyOn(component, 'getCheckListConfig').and.callThrough();
    component.ngOnInit();
    expect(component.contentId).toBe('do_123456789');
    expect(component.userId).toBe('123');
    expect(component.getCheckListConfig).toHaveBeenCalled();
  });

  it('#createCheckedArray should push all the checked reason ', () => {
    spyOn(component, 'validateModal').and.callThrough();
    component.reasons = [];
    component.createCheckedArray('Appropriate Title, Description');
    expect(component.reasons.length).toEqual(1);
    expect(component.validateModal).toHaveBeenCalled();
  });

  it('#createCheckedArray should remove all the checked reason ', () => {
    spyOn(component, 'validateModal').and.callThrough();
    component.reasons = ['Appropriate Title, Description'];
    component.createCheckedArray('Appropriate Title, Description');
    expect(component.reasons.length).toEqual(0);
    expect(component.validateModal).toHaveBeenCalled();
  });

  it('#validateModal should set #isDisabled to #false when all input checked ', () => {
    component.showDefaultConfig = true;
    component.validateModal();
    expect(component.isDisabled).toBeFalsy();
  });

  it('#validateModal should set #isDisabled to #true when all input not checked ', () => {
    component.showDefaultConfig = false;
    component.reasons = ['Appropriate Title, Description'];
    component.validateModal();
    expect(component.isDisabled).toBeTruthy();
  });

  it('#submitPublishChanges should publish the content when API success', () => {
    spyOn(component, 'redirect').and.callThrough();
    spyOn(window, 'alert').and.callThrough();
    const helperService = TestBed.inject(HelperService);
    spyOn(helperService, 'publishContent').and.returnValues(of({
      id: 'api.content.publish',
      ver: '1.0',
      ts: '2022-10-10T07:54:13.805Z',
      params: {},
      responseCode: 'OK',
      result: {
          content_id: 'do_113296874922852352184',
          publishStatus: 'Publish Operation for Content Id \'do_113296874922852352184\' Started Successfully!'
      }
    }));
    component.reasons = ['Appropriate Title, Description'];
    component.submitPublishChanges();
    expect(component.isDisabled).toBeTruthy();
    expect(component.redirect).toHaveBeenCalled();
    expect(window.alert).toHaveBeenCalledWith('Content published successfully...');
  });

  it('#submitPublishChanges should throw error msg when API failed', () => {
    spyOn(component, 'redirect').and.callThrough();
    spyOn(window, 'alert').and.callThrough();
    const helperService = TestBed.inject(HelperService);
    spyOn(helperService, 'publishContent').and.returnValue(throwError({}));
    component.reasons = ['Appropriate Title, Description'];
    component.submitPublishChanges();
    expect(component.isDisabled).toBeTruthy();
    expect(component.redirect).toHaveBeenCalled();
    expect(window.alert).toHaveBeenCalledWith('Publishing content failed, please try again later...');
  });

  it('#redirect should navigate to content list page', () => {
    const router = TestBed.inject(Router);
    spyOn(component, 'closeDialog').and.callThrough();
    component.redirect();
    expect(component.closeDialog).toHaveBeenCalled();
    expect(router.navigate).toHaveBeenCalledWith(['/editors/content-list']);
  });

  it('#getCheckListConfig should fetch the form data when API success', () => {
    const helperService = TestBed.inject(HelperService);
    spyOn(helperService, 'getFormData').and.returnValues(of({
      id: 'api.form.read',
      ver: '1.0',
      ts: '2022-10-10T07:54:13.805Z',
      params: {},
      responseCode: 'OK',
      result: { form: { data: { fields: ['Appropriate Title, Description']}}}
    }));
    component.getCheckListConfig();
    expect(component.showloader).toBeFalse();
    expect(component.publishCheckListData).toBeTruthy();
  });

  it('#getCheckListConfig should thorw error when API failed', () => {
    spyOn(component, 'closeModalAfterError').and.callThrough();
    const helperService = TestBed.inject(HelperService);
    spyOn(helperService, 'getFormData').and.returnValues(throwError({}));
    component.getCheckListConfig();
    expect(component.publishCheckListData).toBeFalsy();
    expect(component.closeModalAfterError).toHaveBeenCalled();
  });

  it('#recloseModalAfterError should thorw error msg and call #redirect method', () => {
    spyOn(window, 'alert').and.callThrough();
    spyOn(component, 'redirect').and.callThrough();
    component.closeModalAfterError();
    expect(component.redirect).toHaveBeenCalled();
    expect(window.alert).toHaveBeenCalledWith('Something went wrong, try again late');
  });

  it('#closeDialog() should call close dialog ', () => {
    const spy = spyOn(component.dialogRef, 'close').and.callThrough();
    component.closeDialog();
    expect(spy).toHaveBeenCalled();
  });

});
