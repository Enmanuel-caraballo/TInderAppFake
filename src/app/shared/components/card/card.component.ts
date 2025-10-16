import { Component, Input, OnInit, TemplateRef } from '@angular/core';
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

  // @Input() onExecute!: () => void; //El input recibira una funcion
  @Input() items: any[] = [];
  @Input() itemTemplate!: TemplateRef<any>;

  executeParentFunction(){
    // if (this.onExecute) {
    //   this.onExecute();
    // }
  }

   usersShow: IUserShow[] = [];
  constructor(private readonly crudSrv: Crud) { }

  ngOnInit() {
    // this.onExecute();
  }

  

  //   async showInfo(){


  //   const users = await this.crudSrv.getAll('users');
  //   console.log(users);


  //   if (users) {
  //      users.forEach(user =>{

  //       //  this.name = user.name;
  //       //  this.lastName = user.lastName;
  //       //  this.gender = user.gender;
  //       //  this.img = user.images[0];

  //        const userShow: IUserShow = {
  //        name: user.name,
  //        lastName:  user.lastName,
  //        gender: user.gender,
  //        img: user.images[0] || '',
  //       }
  //       this.usersShow.push(userShow);
  //      });




  //   }

  // }

}
