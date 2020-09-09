import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],

})
export class LoginPage implements OnInit {

  constructor(
    private router: Router,
    public alertController: AlertController
  ) { }

  ngOnInit() {
console.log(20)
    this.changeLogin();

  }

  loginlogo : boolean = false
  loginlogoform:boolean = false
  eyeShow:boolean = true
  signUpformO:boolean = false
  loginlogoMain :boolean = false


  changeLogin(){
    if(this.loginlogo == true){
      document.getElementById('uplogo').style.marginTop = '30%'

    }

  }

  async presentAlertMultipleButtons() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      message: 'User Name or password are incorrect!',
      buttons: ['OK']
    });

    await alert.present();
  }

  viewLoginForm(){
    setTimeout(()=>{
      this.loginlogoform = true
    },1000)
  }
eyehidef(){
  var a = (<HTMLInputElement>document.getElementById("pass"))
  this.eyeShow = !this.eyeShow;
  this.eyeShow == true ? a.type = 'password' : a.type = 'text'
}

goHome(email, pass){
  var emailA = 'abc';
  var passwordA = '123'
if(email == emailA && pass == passwordA){
 this.router.navigate(['/home'])
  }
  else{
    this.presentAlertMultipleButtons()
  }
}

chngeSignUp(){
this.loginlogoform = false;
this.signUpformO = true;
}
chngeLoginUp(){
  this.loginlogoform = true;
this.signUpformO = false;
}
signUp(){
  this.loginlogoMain = true
  
}

}
