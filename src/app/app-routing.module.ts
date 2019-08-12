import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { studentlistComponent } from './classes/student-list/student-list.component';
import { FullLayoutComponent } from './layout/full-layout/full-layout.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';

import { ClassComponent } from './components/class/class.component';
import { notificationComponent } from './components/notification/notification.component';








const routes: Routes = [
  {
    path: '',
    component: FullLayoutComponent,
    data: {
      title: 'components'
    },

    children: [
      {
        path: '',
        component: HomeComponent
      },
  
      {
        path: 'profile',
        component: ProfileComponent
      },
 
      {
        path: 'notification',
        component: notificationComponent
      },
  
    

    
      
    
      
     
    ]
  },
  {
    path: 'stream',
    component: FullLayoutComponent,
    data: {
  
    },
    children: [
     
      {
        path: 'class/:id',
        component: ClassComponent
      },

    ]
  },


  {
    path: 'classes',
    component: FullLayoutComponent,
    data: {
  
    },
    children: [
     
   
      {
        path: 'student-list/:id',
        component: studentlistComponent
      },

    

    ]
  },


  


 



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
