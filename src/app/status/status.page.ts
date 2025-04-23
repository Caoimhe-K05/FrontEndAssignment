import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonLabel,IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, IonList, IonItem, IonRadio, IonRadioGroup, IonButton } from '@ionic/angular/standalone';
import { Storage } from '@ionic/storage-angular';//imported for storage
import { Router } from '@angular/router';//imported for naviagtion between pages

@Component({
  selector: 'app-status',
  templateUrl: './status.page.html',
  styleUrls: ['./status.page.scss'],
  standalone: true,
  imports: [IonButton, IonRadioGroup, IonRadio, IonLabel, IonItem, IonList, IonBackButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class StatusPage implements OnInit {
  status:string = "";//holds selected value
  constructor(private storage:Storage, private router:Router) { }//injecting storage for data and router for navigation

  async ionViewWillEnter(){
    console.log("ionviewWillEnter");
    await this.storage.create();//creates storage if not already made
    this.status = await this.storage.get('status');//retreives saved colour from storage
  }

  async onButtonClick(){//save button method
    console.log(this.status);
    await this.storage.create();//doesnt happen until storage is ready
    await this.storage.set('status', this.status);//saves colour
    this.router.navigate(['/home']);
  }
  ngOnInit() {
  }

}
