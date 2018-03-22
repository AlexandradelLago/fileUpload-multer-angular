import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';

//services
import {FileService} from './services/file.service';
import {SessionService} from './services/session.service';

//toastr
import {ToastModule} from 'ng2-toastr/ng2-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ToastModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [FileService, SessionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
