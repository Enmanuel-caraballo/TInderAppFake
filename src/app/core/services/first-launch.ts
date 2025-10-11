import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class FirstLaunch {
  private readonly FIRST_LAUNCH_KEY = 'first_launch_done';
  private _storage: Storage | null = null;

  constructor(private readonly storage: Storage){
    this.init();
  }

   async init(){
    const storage = await this.storage.create();
    this._storage = storage;
   }

  async isFirstLaunch(): Promise<boolean>{

    const value = await this.storage.get(this.FIRST_LAUNCH_KEY);
    console.log(value);
console.log(await this.storage.keys());
    return !value;
  }

  async setLaunched(): Promise<void>{
    await this._storage?.set(this.FIRST_LAUNCH_KEY, true);
   console.log(await this.storage.keys());

  }
}
