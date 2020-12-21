import { Observable } from 'rxjs';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  Router,
  UrlTree,
} from '@angular/router';

import { Injectable } from '@angular/core';

import { EventService } from './../../shared/event.service';

@Injectable({
  providedIn: 'root',
})
export class EventsRouterActivatorService implements CanActivate {
  constructor(private eventService: EventService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const newLocal = 'id';
    const eventExits = !!this.eventService.getOneEvent(+route.params[newLocal]);

    if (!eventExits) {
      this.router.navigate(['/404']);
      return eventExits;
    }
    return true;
  }
}
