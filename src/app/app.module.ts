import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RemoteServiceService } from './remote-service.service';
import { NativeAudio } from '@ionic-native/native-audio/ngx';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { 
  HTTP_INTERCEPTORS, 
  HttpClientModule 
} from '@angular/common/http';
import { HttpConfigInterceptor } from './httpConfig.interceptor';
import { AnimationService, AnimatesDirective } from 'css-animator';
import { HomePageModule } from './home/home.module';
import { ListPageModule } from './list/list.module';

// == Native modules
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer/ngx'; 
import { File } from '@ionic-native/file/ngx';
import { IonicStorageModule } from '@ionic/storage';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { Calendar } from '@ionic-native/calendar/ngx';
import {CalPage } from './rabbana-list/calender_Time';
import { Media } from '@ionic-native/media/ngx';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { AppRate } from '@ionic-native/app-rate/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@NgModule({
   declarations: [AppComponent,CalPage],
  //declarations: [AppComponent,CalPage],
  entryComponents: [],
  imports: [
    IonicStorageModule.forRoot(),
    HttpClientModule,
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HomePageModule,
    ListPageModule,
    BrowserAnimationsModule,
    
    
  ],
  providers: [
    InAppBrowser,
    EmailComposer,
    AppRate,
     AnimationService,
    NativeAudio,
    SocialSharing,
    LocalNotifications,
    FileTransfer,
    File,
    StatusBar,
    SplashScreen,
    Media,
    Calendar,
    RemoteServiceService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpConfigInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
