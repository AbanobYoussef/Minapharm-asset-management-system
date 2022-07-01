import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/modules/@resources/services/notification/notification.service';

@Component({
	selector: 'app-notification',
	templateUrl: './app-notification.component.html',
	styleUrls: ['./app-notification.component.scss']
})

export class AppNotificationComponent implements OnInit {

	showSuccess!: boolean;
	showError!: boolean;	
	showInfo!: boolean;  
	hide!: boolean;
	constructor(public notificationService: NotificationService) { }

	ngOnInit() {
		this.notificationService.showSuccess.subscribe(val => {
			this.showSuccess = val;
		})
		this.notificationService.showError.subscribe(val => {
			this.showError = val;
		})
		this.notificationService.showInfo.subscribe(val => {
			this.showInfo = val;
		})
	}

	hideNotif() {
		this.showSuccess = false;
		this.showError = false;
		this.showInfo = false;
	}

}
