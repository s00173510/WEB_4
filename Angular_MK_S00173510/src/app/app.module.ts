import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GithubService } from './server/github.service';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { Routes, RouterModule} from '@angular/router';
import { ImgComponent } from './img/img.component';
import { MainRowComponent } from './main-row/main-row.component';
import { ItemMenuComponent } from './item-menu/item-menu.component';
import { ProgContComponent } from './prog-cont/prog-cont.component';
import { CsharpProgComponent } from './csharp-prog/csharp-prog.component';
import { JsProgComponent } from './js-prog/js-prog.component';
import { EducationComponent } from './education/education.component';
import { CiotProgComponent } from './ciot-prog/ciot-prog.component';
import { LenguageImgComponent } from './lenguage-img/lenguage-img.component';
import { ExperDisplayComponent } from './exper-display/exper-display.component';
const routes: Routes = [
  { path: '', redirectTo: 'about', pathMatch: 'full'},
  { path: 'about', component: AboutComponent }, 
  { path: 'education', component: EducationComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'contactus', redirectTo: 'contact' },
];

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    ImgComponent,
    MainRowComponent,
    ItemMenuComponent,
    ProgContComponent,
    CsharpProgComponent,
    JsProgComponent,
    EducationComponent,
    CiotProgComponent,
    LenguageImgComponent,
    ExperDisplayComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [GithubService,{ provide:LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
