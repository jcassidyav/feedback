import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedFeedback } from '@demo/shared';
import { } from '@jcassidyav/feedback';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedFeedback {
	
}
