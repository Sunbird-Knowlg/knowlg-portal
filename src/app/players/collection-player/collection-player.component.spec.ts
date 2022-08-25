import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CollectionPlayerComponent } from './collection-player.component';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContentDetailsModelComponent } from './content-details-model/content-details-model.component';
import { CollectionDetailsModelComponent } from './collection-details-model/collection-details-model.component';

describe('CollectionPlayerComponent', () => {
  let component: CollectionPlayerComponent;
  let fixture: ComponentFixture<CollectionPlayerComponent>;
  const mockActivatedRoute = {
    snapshot: {
      queryParams: {
        collectionId: 'do_21247940906829414411032',
      }
    }
  };
  class RouterStub {
    navigate = jasmine.createSpy('navigate');
  }

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, MatDialogModule, BrowserAnimationsModule],
      declarations: [CollectionPlayerComponent],
      providers: [
        HttpClient, { provide: ActivatedRoute, useValue: mockActivatedRoute },
        { provide: Router, useClass: RouterStub }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionPlayerComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('#showNoContent should set isContentPresent to false', () => {
    const event = { message: 'No Content Available' };
    component.showNoContent(event);
    expect(component.isContentPresent).toBeFalse();
  });
  it('#showNoContent should not set isContentPresent to false', () => {
    component.isContentPresent = true;
    const event = { message: 'Some random message' };
    component.showNoContent(event);
    expect(component.isContentPresent).not.toBeFalse();
  });
  it('#isActiveContentInteractiveType should return false for active content mime type', () => {
    component.interactiveMimeTypes = ['application/vnd.ekstep.ecml-archive', 'application/vnd.ekstep.h5p-archive'];
    component.activeContent = { mimeType: 'application/vnd.ekstep.html-archive' };
    const state = component.isActiveContentInteractiveType();
    expect(state).toBeFalse();
  });
  it('#isActiveContentInteractiveType should return true for active content mime type', () => {
    component.interactiveMimeTypes = ['application/vnd.ekstep.ecml-archive', 'application/vnd.ekstep.h5p-archive'];
    component.activeContent = { mimeType: 'application/vnd.ekstep.ecml-archive' };
    const state = component.isActiveContentInteractiveType();
    expect(state).toBeTrue();
  });
  it('#selectedFilter() should define activeMimeTypeFilter', () => {
    const event = { data: { value: 'abc' } };
    component.selectedFilter(event);
    expect(component.activeMimeTypeFilter).toBe('abc');
  });
  it('#openContentDetailsModel() should  open content details modal component', () => {
    component.activeContent = { name: 'content', identifier: 'do_11147940906829414411456' };
    const spy = spyOn(component.dialog, 'open').and.callThrough();
    component.openContentDetailsModel();
    expect(spy).toHaveBeenCalledWith(ContentDetailsModelComponent, { data: { activeContent: component.activeContent } });
  });
  it('#openCollectionDetailsModel() should  open collection details modal component', () => {
    component.collectionData = { name: 'collection', identifier: 'do_21247940906829414411032' };
    const spy = spyOn(component.dialog, 'open').and.callThrough();
    component.openCollectionDetailsModel();
    expect(spy).toHaveBeenCalledWith(CollectionDetailsModelComponent, { data: { collectionData: component.collectionData } });
  });
  it('#handleSelectAll() should set selectedItems to empty for selectAll false', () => {
    const event = { selectAll: false };
    component.selectedItems = [{ value1: 'abc' }];
    component.handleSelectAll(event);
    expect(component.selectedItems).toEqual([]);
  });
  it('#handleSelectAll() should set selectedItems for selectAll true', () => {
    const event = { selectAll: true, data: ['abc'] };
    component.selectedItems = ['cdf'];
    component.handleSelectAll(event);
    expect(component.selectedItems).toEqual(['cdf', 'abc']);
  });
  it('#handleSelectedItem() should call handleSelectAll for event data having selectAll true', () => {
    const event = { selectAll: true, data: ['abc'] };
    component.selectedItems = ['cdf'];
    spyOn(component, 'handleSelectAll').and.callThrough();
    component.handleSelectedItem(event);
    expect(component.handleSelectAll).toHaveBeenCalledWith(event);
  });
  it('#handleSelectedItem() should call handleSelectAll for event data having selected true', () => {
    const event = { selectAll: true, data: [{ selected: true }] };
    component.selectedItems = ['cdf'];
    spyOn(component, 'handleSelectAll').and.callThrough();
    component.handleSelectedItem(event);
    expect(component.selectedItems.length).toBe(2);
  });
  it('#isActiveContentVideoType should return true for active content video mime type', () => {
    component.videoMimeTypes = ['video/mp4', 'video/x-youtube', 'video/webm'];
    component.activeContent = { mimeType: 'video/mp4' };
    const state = component.isActiveContentVideoType();
    expect(state).toBeTrue();
  });
  it('#isActiveContentVideoType should return false for active content video mime type', () => {
    component.videoMimeTypes = ['video/x-youtube', 'video/webm'];
    component.activeContent = { mimeType: 'video/mp4' };
    const state = component.isActiveContentVideoType();
    expect(state).toBeFalse();
  });
  it('#tocCardClickHandler() should call tocCardClickHandler and call callinitPlayer method', () => {
    const event = {data : {identifier: 'abc'}};
    spyOn(component, 'callinitPlayer').and.callThrough();
    component.tocCardClickHandler(event);
    expect(component.callinitPlayer).toHaveBeenCalledWith(event);
  });
});
