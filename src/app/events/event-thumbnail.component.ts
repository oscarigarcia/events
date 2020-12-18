import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-event-thumbnail',
  template: `
    <div class="well hoverwell thumbnail">
      <h2>{{ event.name }}</h2>
      <div>Date: {{ event.date }}</div>
      <div [ngClass]="getStartTimeClass()" [ngSwitch]="event.time">
        Time: {{ event.time }}
        <span class="span" *ngSwitchCase="'8:00 am'">(Early Start)</span>
        <span *ngSwitchCase="'10:00 am'">(Later Start)</span>
        <span *ngSwitchDefault>(Normal Start)</span>
      </div>
      <div>Price: {{ event.price }}</div>
      <div>
        <span>Location: {{ event.location.address }}</span>
        <span class="pad-left">
          {{ event.location.city }}, {{ event.location.country }}</span
        >
      </div>
    </div>
  `,
  styles: [
    `
      .orange {
        color: orange;
      }
      .green {
        color: green;
      }
      .bold {
        font-weight: bold;
        font-size: 2rem;
      }
      .thumbnail {
        min-height: 21rem;
      }
      .pad-left {
        margin-left: 1rem;
      }
    `,
  ],
})
export class EventThumbnailComponent {
  @Input() event: any;

  getStartTimeClass = () => {
    if (this.event && this.event.time === '8:00 am') {
      return ['green', 'bold'];
    }
    return ['orange'];
  };
}
