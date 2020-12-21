import { EventsRouterActivatorService } from './events/events-details/events-router-activator.service';
import { Error404Component } from './../errors/404.component';
import { ToastrService } from './commons/toastr.service';
import { EventService } from './shared/event.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { EventsComponent } from './events/events.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { NavComponent } from './nav/nav.component';
import { EventsDetailsComponent } from './events/events-details/events-details.component';
import { RouterModule } from '@angular/router';
import { routes } from '../routes';

@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    EventThumbnailComponent,
    NavComponent,
    EventsDetailsComponent,
    Error404Component,
  ],
  imports: [BrowserModule, HttpClientModule, RouterModule.forRoot(routes)],
  providers: [
    EventService,
    ToastrService,
    EventsRouterActivatorService,
    // { provide: 'canDeactivateCreateEvent', useValue: checkDirtyState },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
// export function checkDirtyState(component: EventsComponent) {
//   if (component.isDirty) {
//     return window.confirm('pepe');
//   }
// }
