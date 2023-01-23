import { TestBed } from '@angular/core/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HelperService } from './helper.service';
import { ActivatedRoute } from '@angular/router';
import { ConfigService } from '../config/config.service';
import { ActionService } from '../action/action.service';
import { of } from 'rxjs';

const mockActivatedRoute = {
  snapshot: {
    queryParams: {
      identifier: 'do_21247940906829414411032',
      collectionId: 'do_1234'
    }
  }
};
describe('HelperService', () => {
  let service: HelperService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [HttpClient, ConfigService, ActionService, { provide: ActivatedRoute, useValue: mockActivatedRoute }]
    });
    service = TestBed.inject(HelperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#sortChildrenWithIndex should return the same tree data', () => {
    const tree = { children: [{name: 'content 1', index: 1}] };
    const result = service.sortChildrenWithIndex(tree);
    expect(result).toEqual(tree);
  });

  it('#getContent should get the content metadata', (done) => {
    const actionService = TestBed.inject(ActionService);
    spyOn(actionService, 'get').and.returnValues(of({}));
    service.getContent('do_12345678').subscribe(() => {
      done();
    });
  });

  it('#getCollectionHierarchy should fetch collection hierarchy details', (done) => {
    const actionService = TestBed.inject(ActionService);
    spyOn(actionService, 'get').and.returnValues(of({result: { content: {name: 'collection'}}}));
    service.getCollectionHierarchy('do_12345678').subscribe(() => {
      done();
    });
  });

  it('#createContent should create the content with given request', (done) => {
    const actionService = TestBed.inject(ActionService);
    spyOn(actionService, 'post').and.returnValues(of({result: { }}));
    service.createContent({name: 'test content'}).subscribe(() => {
      done();
    });
  });


  it('should call the #publishContent method with request', (done) => {
    const actionService = TestBed.inject(ActionService);
    spyOn(actionService, 'post').and.returnValues(of({}));
    service.publishContent({lastPublishedBy: '123'}, '12345678').subscribe(() => {
      done();
    });
  });

  it('#contentSearch should fetch contents', (done) => {
    const actionService = TestBed.inject(ActionService);
    spyOn(actionService, 'post').and.returnValues(of({}));
    service.contentSearch({}).subscribe(() => {
      done();
    });
  });

  it('#getChannel should get the channel details', (done) => {
    const actionService = TestBed.inject(ActionService);
    spyOn(actionService, 'get').and.returnValues(of({}));
    service.getChannel('123456789').subscribe(() => {
      done();
    });
  });

  it('#getCategoryDefinition should fetch the category defination configuration ', (done) => {
    const actionService = TestBed.inject(ActionService);
    spyOn(actionService, 'post').and.returnValues(of({}));
    service.getCategoryDefinition('collection', 'test', '123456789').subscribe(() => {
      done();
    });
  });

  it('#getAllRoleTypes should fetch all the role types', (done) => {
    const actionService = TestBed.inject(ActionService);
    spyOn(actionService, 'get').and.returnValues(of({}));
    service.getAllRoleTypes().subscribe(() => {
      done();
    });
  });

  it('#getAllUsersByRoleType should fetch users details by role type', (done) => {
    const actionService = TestBed.inject(ActionService);
    spyOn(actionService, 'post').and.returnValues(of({}));
    service.getAllUsersByRoleType('creator').subscribe(() => {
      done();
    });
  });

  it('should call the #getFormData method with request', (done) => {
    const actionService = TestBed.inject(ActionService);
    spyOn(actionService, 'post').and.returnValues(of({}));
    const formInputParams = {
      formType: 'content',
      formAction : 'publish',
      subType: 'resource'
    };
    service.getFormData(formInputParams).subscribe(() => {
      done();
    });
  });

  it('#setConfig should set config data', () => {
    const config = {objectMetadata: { config: { primaryCategory: 'collection'} } };
    service.setConfig(config);
    expect(service.editorConfig).toEqual(config);
  });

  it('#getConfig should get config data', () => {
    const config = {objectMetadata: { config: { primaryCategory: 'collection'} } };
    service.setConfig(config);
    const result = service.getConfig();
    expect(result).toEqual(config);
  });

});
