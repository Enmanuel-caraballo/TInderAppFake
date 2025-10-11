import { Injectable } from '@angular/core';
import { Auth } from 'src/app/core/providers/auth/auth';
import { Crud } from 'src/app/core/providers/crudFirebase/crud';
import { IUserCreate } from 'src/app/interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class User {
  constructor(private readonly authSrv: Auth, private readonly crudSrv: Crud) { }

  async create(user: IUserCreate): Promise<void> {
    try {
      console.log(user);
      const uid = await this.authSrv.register(user.email, user.password);
      await this.crudSrv.create('users', {
        uid,
        name: user.name,
        lastName: user.lastName,
        email: user.email,
        password: user.password,
        country: user.country,
        gender: user.gender,
        birthDate: user.birthDate,
        hobbits: user.hobbits,
        images: user.images,
      }, uid);
      console.log('Funciono esa caga');

    } catch (error) {
      console.log(error);

    }
  }
}
