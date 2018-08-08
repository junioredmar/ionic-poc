import { Component } from '@angular/core';
import {
  IonicPage,
  ViewController,
  Events,
  AlertController
} from 'ionic-angular';

import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';
import { Vibration } from '@ionic-native/vibration';


@Component({
  selector: 'modal-qr-scanner',
  templateUrl: 'qrcode.html',
  providers: [Vibration],
})
export class QRScannerModal {
  private ionApp: HTMLElement;

  constructor(
    private events: Events,
    private qrScanner: QRScanner,
    private viewCtrl: ViewController,
    private vibration: Vibration,
    private alertCtrl: AlertController,
  ) {
    this.scanQrCode();
  }

  private scanQrCode(): void {
    this.qrScanner
      .prepare()
      .then((status: QRScannerStatus) => {
        this.ionApp = <HTMLElement>document.getElementsByTagName(
          'ion-app'
        )[0];
        if (status.authorized) {
          const scanSub = this.qrScanner.scan().subscribe((qrCode: string) => {
            this.vibration.vibrate(30);
            let response;
            try {
              response = JSON.parse(qrCode);
            } catch (e) {
              response = qrCode;
            }

            const alert = this.alertCtrl.create({
              title: 'Scanned!',
              subTitle: response,
              buttons: ['OK']
            });
            alert.present();

            this.hideCamera();
            scanSub.unsubscribe();
            this.dismiss(response);
          });

          this.ionApp.classList.add('transparent');
          this.showCamera();
        } else if (status.denied) {
          console.error('QR_CODE.PERMISSION_PERMANENTLY_DENIED');
          this.dismiss();
        } else {
          console.error('QR_CODE.PERMISSION_DENIED');
          this.dismiss();
        }
      })
      .catch((e: any) => {
        console.error('QR_CODE.PROBLEM_TEXT');
        this.dismiss();
      });
  }

  private showCamera() {
    this.qrScanner.show();
    this.events.publish('qrScanner:show');
  }

  private hideCamera() {
    this.qrScanner.hide();
    this.events.publish('qrScanner:hide');
  }

  private dismiss(qrCode: object = null) {
    this.qrScanner.getStatus().then((status: QRScannerStatus) => {
      if (status.showing) {
        this.hideCamera();
      }
    });

    this.ionApp.classList.remove('transparent');
    this.viewCtrl.dismiss(qrCode);
  }

  ionViewDidLeave() {
    this.hideCamera();
    this.qrScanner.destroy();
  }
}

