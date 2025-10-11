import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { GlobalUser } from 'src/app/core/services/globalUser/global-user';

@Component({
  selector: 'app-register3',
  templateUrl: './register3.page.html',
  styleUrls: ['./register3.page.scss'],
  standalone: false,
})
export class Register3Page implements OnInit {
birthDay!: FormControl;

@Input() confirmAge: boolean = true;
@Input() ageMessage: string = '';

dateForm!: FormGroup;
  constructor(
    private readonly globalUserSrv: GlobalUser,
    private readonly router: Router
  ) {
    this.initForm();
  }


  ngOnInit() {
    console.log(this.globalUserSrv.getGender());

  }

  calculateAge(today: any, birthDate: any){
    if (today && birthDate) {
       let timeDiff = Math.abs(today - <any>birthDate);
        return Math.ceil((timeDiff / (1000 * 3600 * 24)) / 365);
    }else{
      return 0
    }
  }

  async goNext(){
    const fechaWay = new Date();
    const hoy = fechaWay.getTime();

    console.log(hoy);


    this.globalUserSrv.setBirthDate(this.dateForm.value);
    console.log(this.dateForm.value);
     const numberBith = new Date(this.birthDay.value).getTime();

     console.log(numberBith);


   const age = this.calculateAge(hoy, numberBith);

    if (age < 18) {
      this.confirmAge = true;
      this.ageMessage = 'You need to be older to have and account';
    }else{
      this.confirmAge = false;
      this.ageMessage = 'Ok';

      this.router.navigate(['/register4'])
    }

  }

  initForm(){
    this.birthDay = new FormControl('', [Validators.required,])

    this.dateForm = new FormGroup({
      birthDay: this.birthDay
    })
  }


}
