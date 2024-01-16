import { Inject, Injectable, inject } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'platform',
})
export class EventService {
  private subject = new Subject();

  emit(eventName: string, payload: any) {
    this.subject.next({ eventName, payload });
  }
  listen(eventName: string, callback: (event: any) => void) {
    this.subject.asObservable().subscribe((nextObj: any) => {
      if (eventName === nextObj.eventName) callback(nextObj.payload);
    });
  }
}
