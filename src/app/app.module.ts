import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchPipe } from './pipes/module.filter.pipe';
import { FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material';
import { studentlistComponent } from './classes/student-list/student-list.component';
import { ClassComponent } from './components/class/class.component';
import { SimpleLayoutComponent } from './layout/simple-layout/simple-layout.component';
import { FullLayoutComponent } from './layout/full-layout/full-layout.component';
import { SidebarComponent } from './directives/sidebar/sidebar.component';
import { HeaderComponent } from './directives/header/header.component';
import { ProfileComponent } from './components/profile/profile.component';

import { HomeComponent } from './components/home/home.component';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module
import { notificationComponent } from './components/notification/notification.component';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import { tableComponent } from './components/table/table.component';
import { formComponent } from './components/form/form.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    notificationComponent,
    ProfileComponent,
    HeaderComponent,
    SidebarComponent,
    FullLayoutComponent,
    SimpleLayoutComponent,
    ClassComponent,
    SearchPipe,
    studentlistComponent,
    tableComponent,
    formComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    NgxPaginationModule,
    NgxPageScrollModule,
 
    NgxPageScrollCoreModule.forRoot({_logLevel: 3}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
