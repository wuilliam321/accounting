import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule }     from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AppComponent } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CloudSettings, CloudModule } from '@ionic/cloud-angular';
import { environment } from '../../environments/environment';
import { OutputProvider } from '../providers/output/output';
import { AccountProvider } from '../providers/account/account';
import { PaymentProvider } from '../providers/payment/payment';
import { CurrencyProvider } from '../providers/currency/currency';

const cloudSettings: CloudSettings = {
  'core': {
    'app_id': 'b693212c'
  }
};


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(AppComponent),
    CloudModule.forRoot(cloudSettings),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    AppComponent,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    OutputProvider,
    AccountProvider,
    PaymentProvider,
    CurrencyProvider,
  ]
})
export class AppModule {}
