import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideAuth, getAuth} from '@angular/fire/auth'
import { environment } from 'src/environments/environment';
import { Auth } from './providers/auth/auth';
import { NativeToast } from './providers/nativeToast/native-toast';
import { File } from './providers/file/file';
import { Uploader } from './providers/upLoader/uploader';

const providers = [Auth, NativeToast, File, Uploader];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [


    provideFirebaseApp(() => initializeApp(environment.FIREBASE_CONFIG)),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth()),

      ...providers,
  ],

})
export class CoreModule implements OnInit{

    constructor(private readonly fileSrv: File){

    }

    async ngOnInit() {

   await this.fileSrv.requestPermissions();
  }

}
