import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { UploadedPhotosPageComponent } from './uploaded-photos-page/uploaded-photos-page.component';
import { SharedModule } from './shared/shared.module';

const appRoutes: Routes = [
  {
    path: 'main',
    component: MainPageComponent,
    children: [
      {
        path: 'uploadedPhotos',
        component: UploadedPhotosPageComponent
      }
    ]
  },
  { path: '',
    redirectTo: '/main',
    pathMatch: 'full'
  },
];

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    UploadedPhotosPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
