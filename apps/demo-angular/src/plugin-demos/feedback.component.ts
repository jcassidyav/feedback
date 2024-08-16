import { Component, NgZone } from '@angular/core';
import { DemoSharedFeedback } from '@demo/shared';
import { } from '@jcassidyav/feedback';

@Component({
	selector: 'demo-feedback',
	templateUrl: 'feedback.component.html',
})
export class FeedbackComponent {
  
  demoShared: DemoSharedFeedback;
  
	constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedFeedback();
  }

}