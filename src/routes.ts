import { Error404Component } from './errors/404.component';
import { EventsRouterActivatorService } from './app/events/events-details/events-router-activator.service';
import { Routes } from '@angular/router';

import { EventsComponent } from './app/events/events.component';
import { EventsDetailsComponent } from './app/events/events-details/events-details.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/events',
    pathMatch: 'full',
  },
  {
    path: 'events',
    component: EventsComponent,
  },
  {
    path: 'events/:id',
    component: EventsDetailsComponent,
    canActivate: [EventsRouterActivatorService],
  },
  {
    path: '404',
    component: Error404Component,
  },
  {
    path: 'events/new',
    component: EventsDetailsComponent,
    canDeactivate: ['canDeactivateCreateEvent'],
  },
];
