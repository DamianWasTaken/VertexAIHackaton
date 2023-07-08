import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root'
})
export class ContentServiceService {
  
  //service to get the speicfic content using the web-request service, leaving rempty rn
  constructor(private webRequestService:WebRequestService) {
  
  }

  createContent(message: string, chat: string ){
    //send web request to content example for post
    return this.webRequestService.post(message, chat)


  }

}
