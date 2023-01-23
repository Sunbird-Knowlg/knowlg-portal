import { TestBed } from '@angular/core/testing';

import { UtilsService } from './utils.service';

describe('UtilsService', () => {
  let service: UtilsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UtilsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return Initial', () => {
      const initial = service.getInitial("sunbird");
      expect(initial).toBe("S");
  })

  it('should return empty string when undefined is passed', () => {
    const initial = service.getInitial(undefined);
    expect(initial).toBe("");
  })

  it('should return color and background color ', () => {

    const colors = service.getColors();
    expect(colors.color).toEqual(jasmine.any(String))
    expect(colors.backgroundColor).toEqual(jasmine.any(String))
    expect(colors.color.startsWith("rgb")).toBe(true);
    expect(colors.backgroundColor.startsWith("rgb")).toBe(true);
  })

});
