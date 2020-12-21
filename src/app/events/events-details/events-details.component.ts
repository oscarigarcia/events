import { EventService } from './../../shared/event.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-events-details',
  templateUrl: './events-details.component.html',
  styleUrls: ['./events-details.component.css'],
})
export class EventsDetailsComponent implements OnInit {
  event!: any;

  constructor(
    private eventService: EventService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const newLocal = 'id';
    this.event = this.eventService.getOneEvent(
      +this.route.snapshot.params[newLocal]
    );
  }
}
