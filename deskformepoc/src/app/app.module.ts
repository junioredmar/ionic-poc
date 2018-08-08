import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { QRScannerModal } from '../pages/qrcode/qrcode';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { QRScanner } from '@ionic-native/qr-scanner';
import { Vibration } from '@ionic-native/vibration';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    QRScannerModal
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    QRScannerModal
  ],
  providers: [
    StatusBar,
    QRScanner,
    Vibration,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
