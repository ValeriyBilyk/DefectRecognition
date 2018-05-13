import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { ChartModule } from 'angular2-highcharts';
import { HighchartsStatic } from 'angular2-highcharts/dist/HighchartsService';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { UploadedPhotosPageComponent } from './uploaded-photos-page/uploaded-photos-page.component';
import { SharedModule } from './shared/shared.module';
import { AnalyzedPhotosPageComponent } from './analyzed-photos-page/analyzed-photos-page.component';
import { StatisticsPageComponent } from './statistics-page/statistics-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { CreateDialogComponent } from './uploaded-photos-page/create-dialog/create-dialog.component';
import { DeleteDialogComponent } from './uploaded-photos-page/delete-dialog/delete-dialog.component';
import { PhotoService } from './services/photo.service';
import { AnalyzeDialogComponent } from './uploaded-photos-page/analyze-dialog/analyze-dialog.component';
import { AnalyzeAllDialogComponent } from './uploaded-photos-page/analyze-all-dialog/analyze-all-dialog.component';

export function highchartsFactory() {

  return require('highcharts');
}

const appRoutes: Routes = [
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: 'main',
    component: MainPageComponent,
    children: [
      {
        path: 'uploaded-photos',
        component: UploadedPhotosPageComponent
      },
      {
        path: 'analyzed-photos',
        component: AnalyzedPhotosPageComponent
      },
      {
        path: 'statistics',
        component: StatisticsPageComponent
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
    UploadedPhotosPageComponent,
    AnalyzedPhotosPageComponent,
    StatisticsPageComponent,
    LoginPageComponent,
    CreateDialogComponent,
    DeleteDialogComponent,
    AnalyzeDialogComponent,
    AnalyzeAllDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    SharedModule,
    ReactiveFormsModule,
    ChartModule,
    NgbModule.forRoot(),
    HttpClientModule
  ],
  providers: [
    {
      provide: HighchartsStatic,
      useFactory: highchartsFactory
    },
    PhotoService
  ],
  entryComponents: [
    CreateDialogComponent,
    DeleteDialogComponent,
    AnalyzeDialogComponent,
    AnalyzeAllDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
