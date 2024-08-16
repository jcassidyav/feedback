/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable @typescript-eslint/adjacent-overload-signatures */
/* eslint-disable @typescript-eslint/prefer-namespace-keyword */
/// <reference path="android-declarations.d.ts"/>

declare module com {
	export module tapadoo {
		export module alerter {
			export class Alert implements com.tapadoo.alerter.SwipeDismissTouchListener.DismissCallbacks {
				public static class: java.lang.Class<com.tapadoo.alerter.Alert>;
//				public setExitAnimation$alerter_release(<set-?>: globalAndroid.view.animation.Animation): void;
				public getButtonTypeFace(): globalAndroid.graphics.Typeface;
				public showIcon(showIcon: boolean): void;
				public setRightIconColorFilter(color: number, mode: globalAndroid.graphics.PorterDuff.Mode): void;
				public setLayoutGravity(value: number): void;
//				public setContentGravity($i$a$-apply-Alert$contentGravity$1: number): void;
//				public setButtonTypeFace(<set-?>: globalAndroid.graphics.Typeface): void;
				public setVisibility(this_: number): void;
				public showRightIcon(showRightIcon: boolean): void;
				public setEnableInfiniteDuration(enableInfiniteDuration: boolean): void;
				public getLayoutGravity(): number;
				public setOnClickListener(listener: globalAndroid.view.View.OnClickListener): void;
				public setOnShowListener(listener: com.tapadoo.alerter.OnShowAlertListener): void;
				public setRightIconSize(this_: number): void;
				public onTouch(param0: globalAndroid.view.View, param1: boolean): void;
				public onAnimationEnd(animation: globalAndroid.view.animation.Animation): void;
				public setIconColorFilter(color: number): void;
				public isDismissible(): boolean;
//				public setRightIconPosition($i$a$-apply-Alert$setRightIconPosition$1: number): void;
				public getTitle(): globalAndroid.widget.TextView;
				public setIcon(drawable: globalAndroid.graphics.drawable.Drawable): void;
				public setRightIcon(drawable: globalAndroid.graphics.drawable.Drawable): void;
				public constructor(context: globalAndroid.content.Context, layoutId: number, attrs: globalAndroid.util.AttributeSet, defStyle: number);
				public setEnableProgress(enableProgress: boolean): void;
//				public setEnterAnimation$alerter_release(<set-?>: globalAndroid.view.animation.Animation): void;
				public setRightIconColorFilter(color: number): void;
				public onAnimationStart(it: globalAndroid.view.animation.Animation): void;
//				public addButton($i$a$-apply-Alert$addButton$1: string, $this$apply: number, $i$a$-apply-Alert$addButton$2: globalAndroid.view.View.OnClickListener): void;
				public onClick(v: globalAndroid.view.View): void;
				public onDetachedFromWindow(): void;
				public setAlertBackgroundResource(resource: number): void;
//				public setRightIconPixelSize($i$a$-apply-Alert$setRightIconPixelSize$1: number): void;
				public setAlertBackgroundDrawable(drawable: globalAndroid.graphics.drawable.Drawable): void;
				public setProgressColorRes(color: number): void;
//				public setOnHideListener$alerter_release(<set-?>: com.tapadoo.alerter.OnHideAlertListener): void;
				public getExitAnimation$alerter_release(): globalAndroid.view.animation.Animation;
				public _$_findCachedViewById(param0: number): globalAndroid.view.View;
				public setTitleAppearance(textAppearance: number): void;
				public constructor(layoutId: globalAndroid.content.Context, param1: number);
				public setVibrationEnabled(vibrationEnabled: boolean): void;
				public setBackgroundElevation(elevation: number): void;
				public constructor(layoutId: globalAndroid.content.Context, attrs: number, param2: globalAndroid.util.AttributeSet);
//				public setDuration$alerter_release(<set-?>: number): void;
				public onAnimationRepeat(animation: globalAndroid.view.animation.Animation): void;
				public setDismissible(dismissible: boolean): void;
				public disableOutsideTouch(): void;
//				public setIconPixelSize($i$a$-apply-Alert$setIconPixelSize$1: number): void;
				public _$_clearFindViewByIdCache(): void;
				public getOnHideListener$alerter_release(): com.tapadoo.alerter.OnHideAlertListener;
				public getLayoutContainer(): globalAndroid.view.View;
				public setRightIcon(iconId: number): void;
				public getContentGravity(): number;
				public getDuration$alerter_release(): number;
				public onDismiss(param0: globalAndroid.view.View): void;
				public setTitle(title: string): void;
				public setText(text: string): void;
				public onDismiss(view: globalAndroid.view.View): void;
				public setIconColorFilter(colorFilter: globalAndroid.graphics.ColorFilter): void;
				public setProgressColorInt(color: number): void;
				public canDismiss(): boolean;
				public setTitle(titleId: number): void;
				public setRightIconColorFilter(colorFilter: globalAndroid.graphics.ColorFilter): void;
				public setRightIcon(bitmap: globalAndroid.graphics.Bitmap): void;
				public setText(textId: number): void;
				public setIcon(bitmap: globalAndroid.graphics.Bitmap): void;
				public pulseIcon(shouldPulse: boolean): void;
				public setTitleTypeface(typeface: globalAndroid.graphics.Typeface): void;
				public setSound(soundUri: globalAndroid.net.Uri): void;
				public setTextAppearance(textAppearance: number): void;
				public setTextTypeface(typeface: globalAndroid.graphics.Typeface): void;
//				public onMeasure($i$a$-apply-Alert$onMeasure$1: number, this_: number): void;
				public setAlertBackgroundColor(color: number): void;
				public onTouch(view: globalAndroid.view.View, touch: boolean): void;
				public setIcon(iconId: number): void;
				public setIconSize(this_: number): void;
				public pulseRightIcon(shouldPulse: boolean): void;
				public onTouchEvent(event: globalAndroid.view.MotionEvent): boolean;
				public removeFromParent$alerter_release(): void;
				public enableClickAnimation(enabled: boolean): void;
				public enableSwipeToDismiss(): void;
				public getEnterAnimation$alerter_release(): globalAndroid.view.animation.Animation;
				public onAttachedToWindow(): void;
				public setIconColorFilter(color: number, mode: globalAndroid.graphics.PorterDuff.Mode): void;
				public getText(): globalAndroid.widget.TextView;
			}
			export module Alert {
				export class Companion {
					public static class: java.lang.Class<com.tapadoo.alerter.Alert.Companion>;
				}
			}
		}
	}
}

declare module com {
	export module tapadoo {
		export module alerter {
			export class Alerter {
				public static class: java.lang.Class<com.tapadoo.alerter.Alerter>;
				public setContentGravity(gravity: number): com.tapadoo.alerter.Alerter;
				public setIcon(iconId: number): com.tapadoo.alerter.Alerter;
				public showRightIcon(showRightIcon: boolean): com.tapadoo.alerter.Alerter;
				public setRightIconPixelSize(size: number): com.tapadoo.alerter.Alerter;
				public setTextTypeface(typeface: globalAndroid.graphics.Typeface): com.tapadoo.alerter.Alerter;
				public setIconColorFilter(color: number, mode: globalAndroid.graphics.PorterDuff.Mode): com.tapadoo.alerter.Alerter;
				public setIconPixelSize(size: number): com.tapadoo.alerter.Alerter;
				public enableRightIconPulse(pulse: boolean): com.tapadoo.alerter.Alerter;
				public setIconColorFilter(colorFilter: globalAndroid.graphics.ColorFilter): com.tapadoo.alerter.Alerter;
				public setBackgroundResource(drawableResId: number): com.tapadoo.alerter.Alerter;
				public setRightIconSize(size: number): com.tapadoo.alerter.Alerter;
				public static clearCurrent(activity: globalAndroid.app.Activity, listener: com.tapadoo.alerter.OnHideAlertListener): void;
				public static isShowing(): boolean;
				public setRightIconPosition(gravity: number): com.tapadoo.alerter.Alerter;
				public setTextAppearance(textAppearance: number): com.tapadoo.alerter.Alerter;
				public setIconSize(size: number): com.tapadoo.alerter.Alerter;
				public setSound(uri: globalAndroid.net.Uri): com.tapadoo.alerter.Alerter;
				public setRightIconColorFilter(color: number): com.tapadoo.alerter.Alerter;
				public setIcon(drawable: globalAndroid.graphics.drawable.Drawable): com.tapadoo.alerter.Alerter;
				public setOnHideListener(listener: com.tapadoo.alerter.OnHideAlertListener): com.tapadoo.alerter.Alerter;
				public setExitAnimation(animation: number): com.tapadoo.alerter.Alerter;
				public setText(text: string): com.tapadoo.alerter.Alerter;
				public show(): com.tapadoo.alerter.Alert;
				public enableInfiniteDuration(infiniteDuration: boolean): com.tapadoo.alerter.Alerter;
				public setLayoutGravity(layoutGravity: number): com.tapadoo.alerter.Alerter;
				public setBackgroundColorInt(colorInt: number): com.tapadoo.alerter.Alerter;
				public disableOutsideTouch(): com.tapadoo.alerter.Alerter;
				public setRightIconColorFilter(color: number, mode: globalAndroid.graphics.PorterDuff.Mode): com.tapadoo.alerter.Alerter;
				public setOnClickListener(onClickListener: globalAndroid.view.View.OnClickListener): com.tapadoo.alerter.Alerter;
				public static hide(): void;
				public setIcon(bitmap: globalAndroid.graphics.Bitmap): com.tapadoo.alerter.Alerter;
				public setIconColorFilter(color: number): com.tapadoo.alerter.Alerter;
				public setOnShowListener(listener: com.tapadoo.alerter.OnShowAlertListener): com.tapadoo.alerter.Alerter;
				public setTitleTypeface(typeface: globalAndroid.graphics.Typeface): com.tapadoo.alerter.Alerter;
				public addButton(text: string, style: number, onClick: globalAndroid.view.View.OnClickListener): com.tapadoo.alerter.Alerter;
				public static create(dialog: globalAndroid.app.Dialog): com.tapadoo.alerter.Alerter;
				public static hide(listener: com.tapadoo.alerter.OnHideAlertListener): void;
				public enableProgress(enable: boolean): com.tapadoo.alerter.Alerter;
				public setDuration(milliseconds: number): com.tapadoo.alerter.Alerter;
				public static create(activity: globalAndroid.app.Activity): com.tapadoo.alerter.Alerter;
				public setProgressColorInt(color: number): com.tapadoo.alerter.Alerter;
				public setText(textId: number): com.tapadoo.alerter.Alerter;
				public showIcon(showIcon: boolean): com.tapadoo.alerter.Alerter;
				public setTitle(titleId: number): com.tapadoo.alerter.Alerter;
				public getLayoutContainer(): globalAndroid.view.View;
				public setButtonTypeface(typeface: globalAndroid.graphics.Typeface): com.tapadoo.alerter.Alerter;
				public setElevation(elevation: number): com.tapadoo.alerter.Alerter;
//				public setBackgroundColorRes($i$a$-let-Alerter$setBackgroundColorRes$1: number): com.tapadoo.alerter.Alerter;
				public setProgressColorRes(color: number): com.tapadoo.alerter.Alerter;
				public static create(activity: globalAndroid.app.Activity, layoutId: number): com.tapadoo.alerter.Alerter;
				public setEnterAnimation(animation: number): com.tapadoo.alerter.Alerter;
				public static create(dialog: globalAndroid.app.Dialog, layoutId: number): com.tapadoo.alerter.Alerter;
				public setTitle(title: string): com.tapadoo.alerter.Alerter;
				public setRightIcon(bitmap: globalAndroid.graphics.Bitmap): com.tapadoo.alerter.Alerter;
				public enableSwipeToDismiss(): com.tapadoo.alerter.Alerter;
				public enableVibration(enable: boolean): com.tapadoo.alerter.Alerter;
				public setBackgroundDrawable(drawable: globalAndroid.graphics.drawable.Drawable): com.tapadoo.alerter.Alerter;
				public setTitleAppearance(textAppearance: number): com.tapadoo.alerter.Alerter;
				public setRightIcon(drawable: globalAndroid.graphics.drawable.Drawable): com.tapadoo.alerter.Alerter;
				public setSound(): com.tapadoo.alerter.Alerter;
				public enableClickAnimation(enabled: boolean): com.tapadoo.alerter.Alerter;
				public hideIcon(): com.tapadoo.alerter.Alerter;
				public static clearCurrent(activity: globalAndroid.app.Activity, dialog: globalAndroid.app.Dialog, listener: com.tapadoo.alerter.OnHideAlertListener): void;
				public setRightIcon(rightIconId: number): com.tapadoo.alerter.Alerter;
				public static clearCurrent(activity: globalAndroid.app.Activity, dialog: globalAndroid.app.Dialog): void;
				public enableIconPulse(pulse: boolean): com.tapadoo.alerter.Alerter;
				public setRightIconColorFilter(colorFilter: globalAndroid.graphics.ColorFilter): com.tapadoo.alerter.Alerter;
				public static clearCurrent(activity: globalAndroid.app.Activity): void;
				public setDismissable(dismissible: boolean): com.tapadoo.alerter.Alerter;
			}
			export module Alerter {
				export class Companion {
					public static class: java.lang.Class<com.tapadoo.alerter.Alerter.Companion>;
					public create(dialog: globalAndroid.app.Dialog): com.tapadoo.alerter.Alerter;
					public clearCurrent(activity: globalAndroid.app.Activity): void;
					public clearCurrent(activity: globalAndroid.app.Activity, dialog: globalAndroid.app.Dialog): void;
					public isShowing(): boolean;
//					public hide($i$a$-let-Alerter$Companion$hide$1: com.tapadoo.alerter.OnHideAlertListener): void;
					public create(activity: globalAndroid.app.Activity, layoutId: number): com.tapadoo.alerter.Alerter;
					public hide(): void;
					public create(activity: globalAndroid.app.Activity): com.tapadoo.alerter.Alerter;
					public create(dialog: globalAndroid.app.Dialog, layoutId: number): com.tapadoo.alerter.Alerter;
//					public clearCurrent($i$a$-let-Alerter$Companion$clearCurrent$1: globalAndroid.app.Activity, $i$a$-run-Alerter$Companion$clearCurrent$2: globalAndroid.app.Dialog, it: com.tapadoo.alerter.OnHideAlertListener): void;
					public clearCurrent(activity: globalAndroid.app.Activity, listener: com.tapadoo.alerter.OnHideAlertListener): void;
				}
			}
		}
	}
}

declare module com {
	export module tapadoo {
		export module alerter {
			export class BuildConfig {
				public static class: java.lang.Class<com.tapadoo.alerter.BuildConfig>;
				public static DEBUG: boolean = 0;
				public static LIBRARY_PACKAGE_NAME: string = "com.tapadoo.alerter";
				public static BUILD_TYPE: string = "release";
				public constructor();
			}
		}
	}
}

declare module com {
	export module tapadoo {
		export module alerter {
			export class OnHideAlertListener {
				public static class: java.lang.Class<com.tapadoo.alerter.OnHideAlertListener>;
				/**
				 * Constructs a new instance of the com.tapadoo.alerter.OnHideAlertListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onHide(): void;
				});
				public constructor();
				public onHide(): void;
			}
		}
	}
}

declare module com {
	export module tapadoo {
		export module alerter {
			export class OnShowAlertListener {
				public static class: java.lang.Class<com.tapadoo.alerter.OnShowAlertListener>;
				/**
				 * Constructs a new instance of the com.tapadoo.alerter.OnShowAlertListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onShow(): void;
				});
				public constructor();
				public onShow(): void;
			}
		}
	}
}

declare module com {
	export module tapadoo {
		export module alerter {
			export class SwipeDismissTouchListener {
				public static class: java.lang.Class<com.tapadoo.alerter.SwipeDismissTouchListener>;
				public onTouch(dismiss: globalAndroid.view.View, absVelocityY: globalAndroid.view.MotionEvent): boolean;
				public constructor(this_: globalAndroid.view.View, mView: com.tapadoo.alerter.SwipeDismissTouchListener.DismissCallbacks);
			}
			export module SwipeDismissTouchListener {
				export class DismissCallbacks {
					public static class: java.lang.Class<com.tapadoo.alerter.SwipeDismissTouchListener.DismissCallbacks>;
					/**
					 * Constructs a new instance of the com.tapadoo.alerter.SwipeDismissTouchListener$DismissCallbacks interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						canDismiss(): boolean;
						onDismiss(param0: globalAndroid.view.View): void;
						onTouch(param0: globalAndroid.view.View, param1: boolean): void;
					});
					public constructor();
					public canDismiss(): boolean;
					public onTouch(param0: globalAndroid.view.View, param1: boolean): void;
					public onDismiss(param0: globalAndroid.view.View): void;
				}
			}
		}
	}
}

//Generics information:

