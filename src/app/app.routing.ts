import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent }   from './about/about.component';
import { MembersComponent } from './members/members.component';
import { PersonStatsComponent } from './person-stats/person-stats.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'members',
    component: MembersComponent
  },
  {
    path: 'people/:id',
    component: PersonStatsComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
