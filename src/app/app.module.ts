import { AppComponent } from './app.component';
import { AuthService } from './user/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { Error404Component } from './../errors/404.component';
import { EventsComponent } from './events/events.component';
import { EventsCreateComponent } from './events/events-create/events-create.component';
import { EventsDetailsComponent } from './events/events-details/events-details.component';
import { EventService } from './shared/event.service';
import { EventsRouterActivatorService } from './events/events-details/events-router-activator.service';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './user/login/login.component';
import { NavComponent } from './nav/nav.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from '../routes';
import { ToastrService } from './commons/toastr.service';
@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    EventThumbnailComponent,
    NavComponent,
    EventsDetailsComponent,
    Error404Component,
    LoginComponent,
    EventsCreateComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [
    EventService,
    ToastrService,
    EventsRouterActivatorService,
    AuthService,
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
