import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FirstLaunch } from 'src/app/core/services/first-launch';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
  standalone: false
})
export class WelcomePage implements OnInit {

  constructor(
    private readonly firstSrv: FirstLaunch,
    private readonly navSrv: NavController

  ) { }

  ngOnInit() {}

  async doFirstTime(){
   await this.firstSrv.setLaunched();
    this.navSrv.navigateRoot('/login')
  }

}
