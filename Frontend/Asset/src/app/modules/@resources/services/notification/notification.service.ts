import { Injectable } from '@angular/core';
import { Subject, timer } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class NotificationService {
	title!: string;
	subTitle!: string;
	showSuccess: Subject<boolean> = new Subject<boolean>();
	showError: Subject<boolean> = new Subject<boolean>();
	showInfo: Subject<boolean> = new Subject<boolean>();
	hide: Subject<boolean> = new Subject<boolean>();
	constructor() { }

	success(title: string, subTitle: string) {
		this.title = title;
		this.subTitle = subTitle;
		this.showSuccess.next(true);
		timer(3000).subscribe(() => this.showSuccess.next(false))
	}

	error(title: string, subTitle: string) {
		this.title = title;
		this.subTitle = subTitle;
		this.showError.next(true);
		timer(3000).subscribe(() => this.showError.next(false))	
	}

	info(title:string, subTitle:string) {
		this.title = title;
		this.subTitle = subTitle;
		this.showInfo.next(true);
		timer(3000).subscribe(() => this.showInfo.next(false))
	}
}
