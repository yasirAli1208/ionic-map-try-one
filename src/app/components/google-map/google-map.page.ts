import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.page.html',
  styleUrls: ['./google-map.page.scss'],
})
export class GoogleMapPage implements OnInit {

	text: string

  constructor() { 
  	this.text = 'Hello world'
  }

  ngOnInit() {
  }

}
