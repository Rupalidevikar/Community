import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { Base64ToGallery } from '@ionic-native/base64-to-gallery/ngx';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-qrcodegenerator',
  templateUrl: './qrcodegenerator.page.html',
  styleUrls: ['./qrcodegenerator.page.scss'],
})
export class QrcodegeneratorPage implements OnInit {
  qrData = 'Name:user1|Id:22334455|adharno:123454352654';
  scannedCode = null;
  elementType: 'url' | 'canvas' | 'img' = 'canvas';

  constructor(
    public router: Router,
    public toastCtrl: ToastController,
    private barcodeScanner: BarcodeScanner,
    private base64ToGallery: Base64ToGallery ) { }


    scanCode() {
      this.barcodeScanner.scan().then(
        barcodeData => {
          this.scannedCode = barcodeData;
        }
      );

    }

    downloadQR() {

      const canvas = document.querySelector('canvas') as HTMLCanvasElement;
      const imageData = canvas.toDataURL('image/jpeg').toString();
      console.log('data: ', imageData);

      const data = imageData.split(',')[1];

      this.base64ToGallery.base64ToGallery(data,
        { prefix: '_img', mediaScanner: true})
        .then(async res => {
          const toast = await this.toastCtrl.create({
            header: 'QR Code Saved to your Photolibrary'
          });
          toast.present();
        }, err => console.log('err: ', err)
        );

    }


    goBack() {
      this.router.navigate(['./tabs/tab4']);
    }
  ngOnInit() {
  }

}
