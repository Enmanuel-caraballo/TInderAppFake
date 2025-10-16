import { Component, OnInit } from '@angular/core';
import { Crud } from 'src/app/core/providers/crudFirebase/crud';
import { GlobalUser } from 'src/app/core/services/globalUser/global-user';
import { IUserShow } from 'src/app/interfaces/user.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: false
})
export class HomePage implements OnInit {

  usersShow: IUserShow[] = [];

  constructor(private readonly crudSrv: Crud) { }



  async ngOnInit() {
    console.log(this.crudSrv.getAll('users'));
    await this.showInfo();
  }

      async showInfo(){


    const users = await this.crudSrv.getAll('users');
    console.log(users);


    if (users) {
       users.forEach(user =>{

        //  this.name = user.name;
        //  this.lastName = user.lastName;
        //  this.gender = user.gender;
        //  this.img = user.images[0];

         const userShow: IUserShow = {
         name: user.name,
         lastName:  user.lastName,
         gender: user.gender,
         img: user.images[0] || '',
        }
        this.usersShow.push(userShow);
       });




    }

  }

}
