import { Component, Input, OnInit } from '@angular/core';
import { Hobbits } from '../../services/hobbits';
import { GlobalUser } from 'src/app/core/services/globalUser/global-user';
import { log } from 'console';

@Component({
  selector: 'app-chip',
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.scss'],
  standalone: false
})
export class ChipComponent {

  preferences: string[] = [];


   hobbies: { Value: string }[] = [];

  constructor(private readonly hobbiesSrv: Hobbits,
    private readonly globalUserSrv: GlobalUser
  ) { }

  ngOnInit() {
    this.hobbiesSrv.getHobbits().subscribe(data =>{
      this.hobbies = data;
    })
  }
   setHobbie(value: string){

   this.preferences.push(value);

   this.globalUserSrv.setHobbits(this.preferences);
   console.log(value);


   }
}
