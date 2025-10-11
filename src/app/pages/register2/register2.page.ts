import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { log } from 'console';
import { GlobalUser } from 'src/app/core/services/globalUser/global-user';

@Component({
  selector: 'app-register2',
  templateUrl: './register2.page.html',
  styleUrls: ['./register2.page.scss'],
  standalone: false,
})
export class Register2Page implements OnInit {

   hola: string = '';

  constructor(
    private readonly navSrv: NavController,
    private readonly globalUserSrv: GlobalUser) {
   }

   ngOnInit() {
      const name =this.globalUserSrv.getName();
        console.log( {name});
      console.log(this.globalUserSrv.getLastName());
  }

    setValue(value: string){
      console.log(value);
      this.globalUserSrv.setGender(value);
  }

  async goNext(){


    this.navSrv.navigateRoot('/register3')

  }

}
