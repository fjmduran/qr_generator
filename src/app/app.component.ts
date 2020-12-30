import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'qr-generator';
  public myAngularxQrCode: string = '';
  constructor(){
    this.myAngularxQrCode = 'Your QR code data string';
  }
}
