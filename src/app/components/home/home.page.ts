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

this.getCoordinates() 

}

  ionViewDidEnter(){
    this.showMap();
  }


 getCoordinates() {
    this.geolocation.getCurrentPosition().then((resp) => {

      this.locationTraces.push({
        latitude:resp.coords.latitude,
        longitude:resp.coords.longitude,
        accuracy:resp.coords.accuracy,
        timestamp:resp.timestamp
      });

    }).catch((error) => {
      console.log('Error getting location', error);
    });
    

    this.locationSubscription = this.geolocation.watchPosition();
    this.locationSubscription.subscribe((resp) => {

      this.locationWatchStarted = true;
      this.locationTraces.push({
        latitude:resp.coords.latitude,
        longitude:resp.coords.longitude,
        accuracy:resp.coords.accuracy,
        timestamp:resp.timestamp
      });
console.log(this.locationTraces)
    });
 

  }

pinMylocation(){
 this.myLat = this.locationTraces[0].latitude
 this.myLang = this.locationTraces[0].longitude
    console.log(this.myLat,this.myLang)
}

  showMap(){
    var lat = 24.8160888
    var lng = 67.0453431
    const location = new google.maps.LatLng( this.myLat ,this.myLang);
    console.log(location)
    const options = {
      center: location,
      zoom: 15,
      disableDefaultUI: true
    }
    this.map = new google.maps.Map(this.mapRef.nativeElement, options);
  }







}
