import { Injectable } from '@angular/core';
declare let toastr: any;

@Injectable({
  providedIn: 'root',
})
export class ToastrService {
  constructor() {}

  success(messages: string, title?: string): void {
    toastr.success(messages, title);
  }
  info(messages: string, title?: string): void {
    toastr.info(messages, title);
  }
  warning(messages: string, title?: string): void {
    toastr.warning(messages, title);
  }
  error(messages: string, title?: string): void {
    toastr.error(messages, title);
  }
}
