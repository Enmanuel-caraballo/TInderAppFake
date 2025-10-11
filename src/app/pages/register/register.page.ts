import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { GlobalUser } from 'src/app/core/services/globalUser/global-user';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: false
})
export class RegisterPage implements OnInit {
  name!: FormControl;
  lastName!: FormControl;
  email!: FormControl;
  password!: FormControl;
  country!: FormControl;

  registerForm!: FormGroup;

  constructor(
    private readonly navSrv: NavController,
    private readonly globalUserSrv: GlobalUser
  ) {
    this.initForm()
  }

  async doRegister(){



  }

  async goNext(){

    console.log(this.registerForm.value);
        console.log('hola',this.name.value);

    this.globalUserSrv.setName(this.name.value);
    this.globalUserSrv.setLastName(this.lastName.value);
    this.globalUserSrv.setEmail(this.email.value);
    this.globalUserSrv.setPassword(this.password.value);
    this.globalUserSrv.setCountry(this.country.value);
    console.log(this.registerForm.value);

    await this.navSrv.navigateRoot('/register2');
  }

  ngOnInit() {
  }

  initForm(){
    this.name = new FormControl('', [Validators.required]);
    this.lastName = new FormControl('', [Validators.required]);
    this.email = new FormControl('', [Validators.email, Validators.required]);
    this.password = new FormControl('', [Validators.required]);
    this.country = new FormControl('', [Validators.required]);

    this.registerForm = new FormGroup({
      name: this.name,
      lastName: this.lastName,
      email: this.email,
      password: this.password,
      country: this.country,
    })
  }

}
