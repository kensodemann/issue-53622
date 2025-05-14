import { Component } from '@angular/core';
import { Browser } from '@capacitor/browser';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonButton, IonContent, IonHeader, IonTitle, IonToolbar],
})
export class HomePage {
  constructor() {}

  openBrowser() {
    Browser.open({ url: 'https://click.me' });
  }
}
