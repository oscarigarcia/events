import { ToastrService } from './../commons/toastr.service';
import { EventService } from './../shared/event.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  template: `<div>
    <h1>Upcoming Angular Events</h1>
    <div class="row">
      <div class="col-md-5" *ngFor="let event of events">
        <app-event-thumbnail
          (click)="handleThumbnailClick(event.name)"
          [event]="event"
        ></app-event-thumbnail>
      </div>
    </div>
  </div>`,
  styles: [''],
})
export class EventsComponent implements OnInit {
  events!: any[];

  constructor(
    private eventService: EventService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.events = this.eventService.getEvent();
  }

  handleThumbnailClick(eventName: string): void {
    this.toastrService.success(eventName);
  }
}
