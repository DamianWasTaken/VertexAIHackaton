import { Component, OnInit } from '@angular/core';
import {ContentServiceService} from 'src/app/content-service.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  constructor(private contentService:ContentServiceService){}


  

}
