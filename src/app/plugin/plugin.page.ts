import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonButton, IonBackButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { Browser } from '@capacitor/browser';//importing to send user to a link
import { Geolocation } from '@capacitor/geolocation';//importing to get location

@Component({
  selector: 'app-plugin',
  templateUrl: './plugin.page.html',
  styleUrls: ['./plugin.page.scss'],
  standalone: true,
  imports: [IonButton, IonBackButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class PluginPage implements OnInit {
  location: any = "";//stores full location
  lat: number = 0;//holds lat number
  long: number = 0;//holds long number

  constructor() { }

  async openBrowser(){//method which sends user to this website
    await Browser.open({ url: 'https://genshin.hoyoverse.com/en/character/Fontaine?char=7'})
  }

  async getLocation(){//method which gets current locaiton
    this.location = await Geolocation.getCurrentPosition();//uses plugin to get locaiton
    this.lat = this.location.coords.latitude;
    this.long = this.location.coords.longitude;

  }

  ngOnInit() {
  }

}
