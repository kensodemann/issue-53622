import { Component } from '@angular/core';
import { Browser } from '@capacitor/browser';
import { DefaultSystemBrowserOptions, InAppBrowser } from '@capacitor/inappbrowser';
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
    Browser.open({ url: 'https://www.npr.org', windowName: '_system' });
  }

  openExternalIAB() {
    InAppBrowser.openInExternalBrowser({
      url: 'https://www.npr.org',
    });
  }

  openSystemIAB() {
    InAppBrowser.openInSystemBrowser({
      url: 'https://www.npr.org',
      options: DefaultSystemBrowserOptions,
    });
  }
}
