import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular'
import { GlobalUser } from 'src/app/core/services/globalUser/global-user';
import { Hobbits } from 'src/app/shared/services/hobbits';

@Component({
  selector: 'app-register4',
  templateUrl: './register4.page.html',
  styleUrls: ['./register4.page.scss'],
  standalone: false
})
export class Register4Page implements OnInit {

  hobbies: { Value: string }[] = [];

  constructor(private readonly navSrv: NavController,
    private readonly globalUserSrv: GlobalUser,
  ) { }

  ngOnInit() {
    console.log(this.globalUserSrv.getBirthDate());
  }

  goNext(){
    this.navSrv.navigateRoot('/register5');
  }


}
