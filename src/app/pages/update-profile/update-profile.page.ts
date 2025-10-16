import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Crud } from 'src/app/core/providers/crudFirebase/crud';
import { GlobalUser } from 'src/app/core/services/globalUser/global-user';
import { IUserCreate, IUserUpdate } from 'src/app/interfaces/user.interface';


@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.page.html',
  styleUrls: ['./update-profile.page.scss'],
  standalone: false,
})
export class UpdateProfilePage implements OnInit {
 name!: FormControl;
 lastName!: FormControl;
 country!: FormControl;
//  passions!: FormControl;
//  media!: FormControl;

 updateForm!: FormGroup;

 uid: string = '';

 imagesUser: string[] = [];
 passionsU: string[] = [];

  user!: IUserUpdate;

  constructor(
    private readonly crudSrv: Crud,
    private readonly globalUserSrv: GlobalUser,
  ) {
    this.initForm()
  }

 async ngOnInit() {
//   this.uid = this.globalUserSrv.getUid();
// // console.log(user);

 await this.update()
  }
  async update(){
  const uid = this.globalUserSrv.getUid();
  const userToUpdate = await this.crudSrv.getByUid('users', uid);

if (userToUpdate) {

  const u = userToUpdate[0];

  this.imagesUser = u.images;
  this.passionsU = u.hobbits;

  this.globalUserSrv.setAllHobbits(u.hobbits);

  console.log(this.imagesUser);

  this.updateForm.patchValue({
    name: u.name,
    lastName: u.lastName,
    country: u.country,
  })

  // userToUpdate.forEach( u =>{
  //   this.user = {
  //     name: u.name,
  //     lastName: u.lastName,
  //     country: u.country,
  //     hobbits: u.hobbits,
  //     images: u.images
  //   }
  // })
}

  }
  private initForm(){
    this.name = new FormControl('', [Validators.required]);
    this.lastName = new FormControl('', [Validators.required]);
    this.country =  new FormControl('', [Validators.required]);
    // this.passions = new FormControl('');
    // this.media = new FormControl('');

    this.updateForm = new FormGroup({
      name: this.name,
      lastName: this.lastName,
      country: this.country,
      // passions: this.passions,
      // media: this.media
    })

  }


  async submitUpdate(){
    const id = this.globalUserSrv.getUid()

    const user: IUserUpdate = {
      name: this.name.value,
      lastName: this.lastName.value,
      country: this.country.value,
      hobbits: this.globalUserSrv.getHobbits(),
      images:  this.imagesUser
    }

    await this.crudSrv.modify('users', id, user);
   //export interface IUserUpdate extends Pick<IUser, 'name' | 'lastName' | 'country' | 'hobbits' | 'images'>{}
    // await this.crudSrv.modify('users', id, )
  }
}
