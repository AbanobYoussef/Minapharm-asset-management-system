import { Injectable } from '@angular/core';
import {
    ToastNotificationInitializer,
    AppearanceAnimation,
    DisappearanceAnimation, DialogLayoutDisplay, ConfirmBoxInitializer
} from '@costlydeveloper/ngx-awesome-popup';
import { TranslationService } from './translation.service';

@Injectable({
    providedIn: 'root'
})
export class MessageService {

    constructor(private translate: TranslationService,) {

    }

    confirmDelete = () => {
        let confirmBox = new ConfirmBoxInitializer();
        confirmBox.setTitle('Are you sure?');
        confirmBox.setMessage('Confirm to delete this element !');
        confirmBox.setButtonLabels('Yes', 'No');

        confirmBox.setConfig({
            layoutType: DialogLayoutDisplay.DANGER,
        });

        return confirmBox.openConfirmBox$();
    }


    toastNotification = (title: string, message: string, isError: boolean) => {

        const newToastNotification = new ToastNotificationInitializer();
        newToastNotification.setTitle(title);
        newToastNotification.setMessage(message);

        // Choose layout color type
        newToastNotification.setConfig({
            layoutType: isError ? DialogLayoutDisplay.DANGER : DialogLayoutDisplay.SUCCESS, // SUCCESS | INFO | NONE | DANGER | WARNING
            animationIn: AppearanceAnimation.ELASTIC, // optional
            animationOut: DisappearanceAnimation.FLIP_OUT // optional
        });

        // Simply open the toast
        newToastNotification.openToastNotification$();

    }


    alertBox(message: string, isError: boolean) {
        const alertBox = new ConfirmBoxInitializer();
        alertBox.setMessage(message);
        alertBox.setButtonLabels('Ok');

        // Choose layout color type
        alertBox.setConfig({
            layoutType: isError ? DialogLayoutDisplay.DANGER : DialogLayoutDisplay.SUCCESS, // SUCCESS | INFO | NONE | DANGER | WARNING
        });

        // Simply open the popup and listen which button is clicked
        //return alertBox.openConfirmBox$();

        //alertBox.openConfirmBox$().subscribe((resp) => {
        //  console.log('Clicked button response: ', resp);
        //});
    }


    defaultSuccesToastNotif = () => {
        const title = "def Succes title";
        const message = "def Succes message";

        this.toastNotification(title, message, false)
    }

    defaultErrorToastNotif = () => {
        const title = "def Error title";
        const message = "def Error message";

        this.toastNotification(title, message, true)
    }



}