# Generador de QR
Generador de códigos QR gratis con Angular 11

Usa la librería angularx-qrcode que puedes encontrar en https://www.npmjs.com/package/angularx-qrcode

MÓDULO

Importar QRCodeModule en el módulo en el que vayas a usar el generador de QR en el caso de lazyload o en el app.module en el caso que no uses lazyload.

COMPONENTE
- En el TypeScript
export class QRCodeComponent {
  public myAngularxQrCode: string = null;
  constructor () {
    // assign a value
    this.myAngularxQrCode = 'Your QR code data string';
  }
}

- En el HTML 
<qrcode [qrdata]="myAngularxQrCode" [width]="256" [errorCorrectionLevel]="'M'"></qrcode>
