import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { ProfileComponent } from '../profile/profile.component';
import { AuthenticationComponent } from '../authentication/authentication.component';
import { InboxComponent } from '../inbox/inbox.component';
import { NotificationsComponent } from '../notification/notifications.component';
import {UserLayoutRoutes} from '../user-layout/user-layout.routing';
import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule
} from '@angular/material';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(UserLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
  ],
  declarations: [
    DashboardComponent,
    ProfileComponent,
    AuthenticationComponent,
    InboxComponent,
    NotificationsComponent,
   
  ]
})

export class UserLayoutModule {}
