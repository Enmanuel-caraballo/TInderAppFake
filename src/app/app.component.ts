import { Component } from '@angular/core';
import { FirstLaunch } from './core/services/first-launch';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  constructor(
    private readonly firstLaunchSrv: FirstLaunch,
    private readonly navCtrl: NavController
  ) {
    this.checkFirstLaunch();
  }

  async checkFirstLaunch(){
    const firstTime = await this.firstLaunchSrv.isFirstLaunch();
    console.log(firstTime);

    if (firstTime == false) {

      // this.firstLaunchSrv.setLaunched('ok', 'puto');
      this.navCtrl.navigateRoot('/login')

    }
    if (firstTime == true) {

      this.navCtrl.navigateRoot('/welcome');
    }
  }
}
