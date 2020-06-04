import { Component, OnInit } from '@angular/core';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.page.html',
  styleUrls: ['./about-us.page.scss'],
})
export class AboutUsPage implements OnInit {
  public form  : FormGroup;
  sendM = false;
  constructor(private _EMAIL   : EmailComposer,   private _FORM	    : FormBuilder,   private _ALERT       : AlertController,) { 

    this.form = this._FORM.group({
      "to"            : ["shabirgirrach@gmail.com", Validators.required],
      "cc"            : ["shabirgirrach@gmail.com", Validators.required],
      "bcc"           : ["", Validators.required],
      "subject"       : ["", Validators.required],
      "message"       : ["", Validators.required]
   });

  }

  ngOnInit() {
  }


  sendEmail(to         : string, 
    cc         : string, 
    bcc        : string, 
    attachment : string,
    subject    : string,
    body       : string) : void
{

this._EMAIL.isAvailable()
.then((available: boolean) =>
{

this._EMAIL.hasPermission()
.then((isPermitted : boolean) =>
{

   let email : any = {
      app 			: 'mailto',
      to 			: to,
      cc 			: cc,
      bcc 			: bcc,
      attachments 	: [
        attachment
      ],
      subject 		: subject,
      body 		: body
   };


   this._EMAIL.open(email);
})
.catch((error : any) =>
{
   console.log('No access permission granted');
   console.dir(error);
});
})
.catch((error : any) =>
{
console.log('User does not appear to have device e-mail account');
console.dir(error);
});
}





sendMessage() : void
{
   let to 		: string		= this.form.controls["to"].value,
       cc 		: string		= this.form.controls["cc"].value,
       bcc 		: string		= this.form.controls["cc"].value,          
       subject 	: string		= this.form.controls["subject"].value,    
       message 	: string		= this.form.controls["message"].value;

      let _attachment = '';
      this.sendEmail(to, cc, bcc, _attachment, subject, message);
 
}



async presentAlert() {
  const alert = await this._ALERT.create({
    cssClass: 'my-custom-class',
    header: 'Alert',
    subHeader: 'Subtitle',
    message: 'This is an alert message.',
    buttons: ['OK']
  });

  await alert.present();
}

mailM(){

  this.sendM = true;


}


}
