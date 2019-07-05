import { Routes } from '@angular/router';

import { DashboardComponent } from '../dashboard/dashboard.component';
import { ProfileComponent } from '../profile/profile.component';
import { AuthenticationComponent } from '../authentication/authentication.component';
import { InboxComponent } from '../inbox/inbox.component';
import { NotificationsComponent } from '../notification/notifications.component';


export const UserLayoutRoutes: Routes = [
    {path: 'user', redirectTo: 'profile'},
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'profile',   component: ProfileComponent },
    { path: 'authentication',     component: AuthenticationComponent },
    { path: 'inbox',     component: InboxComponent  },
    { path: 'notifications',          component: NotificationsComponent },

];
