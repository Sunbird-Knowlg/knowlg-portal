import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HelperService } from '../helper/helper.service';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private helperService: HelperService) { }

  getContent(contentId: string, option: any = { params: {} }): Observable<any> {
    return this.helperService.getContent(contentId, option);
  }
}
