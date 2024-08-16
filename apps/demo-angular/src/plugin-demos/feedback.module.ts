import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { FeedbackComponent } from './feedback.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: FeedbackComponent }])],
  declarations: [FeedbackComponent],
  schemas: [ NO_ERRORS_SCHEMA]
})
export class FeedbackModule {}
