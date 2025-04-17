import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/angular/standalone';//imported button
import { RouterLink } from '@angular/router';//imported for routing to page
import { Storage } from '@ionic/storage-angular';//imported to save preferences

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [ IonButton, RouterLink, IonHeader, IonToolbar, IonTitle, IonContent],
})
export class HomePage {
  movies:any=[];
  myStatus:string = "";//setting favourite colour variable to an empty stirng
  constructor(private storage:Storage) {}

  async ionViewWillEnter(){
    console.log("ionviewWillEnter");
    await this.storage.create();
    this.myStatus = await this.storage.get('status');
  }
}

