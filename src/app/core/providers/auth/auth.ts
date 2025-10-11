import { Injectable } from '@angular/core';
import { Auth as AuthFirebase, createUserWithEmailAndPassword, signInWithEmailAndPassword,
  signOut
} from '@angular/fire/auth';
import { NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class Auth {
  constructor(
    private readonly authFirebase: AuthFirebase,
     private readonly navSrv: NavController,
  ){}

    async register(email: string, password: string){
    const resp = await createUserWithEmailAndPassword(this.authFirebase, email, password);
    console.log(resp);
    return resp.user.uid;
  }

  async login(
    email: string, password: string,

  ){

    try {
      const resp = await signInWithEmailAndPassword(this.authFirebase, email, password);

      if (resp) {

        this.navSrv.navigateRoot("/register")

      }
      console.log(resp);


    } catch (error) {

      console.log((error as any).message);

    }


  }
}
