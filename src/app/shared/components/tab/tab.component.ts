import { Component, OnInit } from '@angular/core';
import { addIcons } from 'ionicons';
import { library, playCircle, radio, settings } from 'ionicons/icons';
import { Auth } from 'src/app/core/providers/auth/auth';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss'],
  standalone: false,
})
export class TabComponent  implements OnInit {

 constructor(private readonly authSrv: Auth) {
    /**
     * Any icons you want to use in your application
     * can be registered in app.component.ts and then
     * referenced by name anywhere in your application.
     */
    addIcons({ library, playCircle, radio, settings });
  }

  getCurrent(){
    this.authSrv.getCurrentUser();
  }

  ngOnInit() {}

}
