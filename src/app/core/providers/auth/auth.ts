import { Injectable } from '@angular/core';
import { Auth as AuthFirebase, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword,
  signOut
} from '@angular/fire/auth';
import { NavController } from '@ionic/angular';
import { GlobalUser } from '../../services/globalUser/global-user';

@Injectable({
  providedIn: 'root'
})
export class Auth {
  constructor(
    private readonly authFirebase: AuthFirebase,
     private readonly navSrv: NavController,
     private readonly globalUserSrv: GlobalUser,
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

        this.navSrv.navigateRoot("/home")

      }
      console.log(resp);


    } catch (error) {

      console.log((error as any).message);

    }


  }

  async getCurrentUser(){
      const auth = getAuth();
      const user = auth.currentUser;

    if (user) {
      const uid = user.uid;
      this.globalUserSrv.setUid(uid);
      console.log(user.email);

    }else{
      console.log("No hay usuario logeado");
  }
}
}
