import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonButton, IonBackButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { Browser } from '@capacitor/browser';
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-plugin',
  templateUrl: './plugin.page.html',
  styleUrls: ['./plugin.page.scss'],
  standalone: true,
  imports: [IonButton, IonBackButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class PluginPage implements OnInit {
  location: any = "";
  lat: number = 0;
  long: number = 0;

  constructor() { }

  async openBrowser(){
    await Browser.open({ url: 'https://genshin.hoyoverse.com/en/character/Fontaine?char=7'})
  }

  async getLocation(){
    this.location = await Geolocation.getCurrentPosition();
    this.lat = this.location.coords.latitude;
    this.long = this.location.coords.longitude;

  }

  ngOnInit() {
  }

}
