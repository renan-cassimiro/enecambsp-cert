import { Injectable } from '@angular/core';
import { ToastController} from '@ionic/angular';

@Injectable()
export class ToastService{

    constructor(private toastCtrl: ToastController){ }

    presentToast(text:string):void{
        let toastData = {
            message: text,
            duration: 3000,
            position: 'top'
        }

        this.showToast(toastData);
    }

    presentClosableToast(text:string):void{
        let toastData = {
            message: text,
            showCloseButton: true,
            closeButtonText: 'X',
            position: 'top' 
        };

        this.showToast(toastData);
    }

    private async showToast(data:any){
        const toast = await this.toastCtrl.create(data);
        toast.present();
    }
}