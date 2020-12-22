import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events-create',
  templateUrl: './events-create.component.html',
  styleUrls: ['./events-create.component.css'],
})
export class EventsCreateComponent implements OnInit {
  newEvent: any;
  constructor() {}

  ngOnInit(): void {}

  saveEvent(values: any): void {
    console.log(values);
  }
}
