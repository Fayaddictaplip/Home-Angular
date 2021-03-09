import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { JobsComponent } from './features/jobs/jobs.component';
import { JobTableComponent } from './features/jobs/components/job-table/job-table.component';
import { JobTableRowComponent } from './features/jobs/components/job-table-row/job-table-row.component';

@NgModule({
  declarations: [
    AppComponent,
    JobsComponent,
    JobTableComponent,
    JobTableRowComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
