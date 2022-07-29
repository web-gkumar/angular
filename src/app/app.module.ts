import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// Services
import { AuthService } from './shared/services/auth.service';

// Import Firebase modules + environment
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';


// Module
import { ToastrModule } from 'ngx-toastr';
import { SwiperModule } from 'swiper/angular';
import { MaterialModule } from './material/material.module';
import { AuthModule } from './auth/auth.module';
import { DashboardModule } from './dashboard/dashboard.module';

// Component
import { HeaderComponent } from './include/header/header.component';
import { BannerComponent } from './include/banner/banner.component';
import { SidenavComponent } from './include/sidenav/sidenav.component';
import { FooterComponent } from './include/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    SidenavComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AuthModule,
    FormsModule,
    ReactiveFormsModule,
    SwiperModule,
    ToastrModule.forRoot(),
    DashboardModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    BrowserAnimationsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
