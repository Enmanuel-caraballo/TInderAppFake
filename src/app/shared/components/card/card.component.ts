import { Component, Input, OnInit } from '@angular/core';
import { Crud } from 'src/app/core/providers/crudFirebase/crud';
import { IUserShow } from 'src/app/interfaces/user.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  standalone: false,
})
export class CardComponent  implements OnInit {
  @Input() name: string = '';
  @Input() lastName: string = '';
  @Input() gender: string = '';
  @Input() img: string = '';

   usersShow: IUserShow[] = [];
  constructor(private readonly crudSrv: Crud) { }

  ngOnInit() {}

    async showInfo(){


    const users = await this.crudSrv.getById('users');

    if (users) {
      const user = users[0];

      this.name = user.name;
      this.lastName = user.lastName;
      this.gender = user.gender;
      this.img = user.images[0];

      const userShow: IUserShow = {
      name: user.name,
      lastName:  user.lastName,
      gender: user.gender,
      img: user.images[0],
      }

      this.usersShow.push(userShow);

    }

  }

}
