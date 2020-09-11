import { Component, ViewChild, ElementRef  } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
 
declare var google:any;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  map : any;

  @ViewChild('map', {read:ElementRef, static: false}) mapRef: ElementRef

 locationWatchStarted:boolean;
  locationSubscription:any;

  locationTraces = [];
  myLat = 24.8160888;
  myLang = 67.0453431;
  myTime:any;

  constructor(
    private geolocation: Geolocation,
    ) {}

ngOnInit(){
}

  ionViewDidEnter(){
    this.getCoordinates();    
  }


 getCoordinates() {
    this.geolocation.getCurrentPosition().then((resp) => {
      console.log(resp);
      this.showMap(resp.coords.latitude, resp.coords.longitude);
    }).catch((error) => {
      console.log('Error getting location', error);
    });

  }

  pinMylocation(){
    this.geolocation.getCurrentPosition().then((position) => {
      this.map.setCenter(new google.maps.LatLng(position.coords.latitude, position.coords.longitude));
    }, (err) => {
      console.log(err);
    }); 

  }

  showMap(lat, lng){
    const location = new google.maps.LatLng(lat, lng);
    const options = {
      center: location,
      zoom: 15
    }
    this.map = new google.maps.Map(this.mapRef.nativeElement, options);
  }


}
